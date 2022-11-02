/**
 * useState() Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application
 */

import { useState } from "react"; //useContext
import {
  createAuthUserWithEmailAndPassword,
  createUSerDocumentFromAuth,
} from "../../../utils/firebase";
import Input from "./Input";
import Button from "../Button/Button";
import { SignUpContainer } from "./styles/SignUp";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormField);

  const { displayName, email, password, confirmPassword } = formFields;

  //Set user after sign up:
  // const { setCurrentUser } = useContext(UserContext);

  //Reset the values in formFields:
  const resetFormFields = () => {
    //Set to empty states
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Confirm passwords matches
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    //See if user is authenicated with email and password:
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // setCurrentUser(user);

      await createUSerDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (err) {
      //returns error message if email is in use, else turns error type
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encountered an error", err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2> Do not have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <Input
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Input
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Input
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
