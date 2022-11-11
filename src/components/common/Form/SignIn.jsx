/**
 * useState() Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application
 */

import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { SignInContainer, ButtonsContainer } from "./styles/SignIn";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../../store/user/userAction";

const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormField);

  const { email, password } = formFields;

  //Reset the values in formFields:
  const resetFormFields = () => {
    //Set to empty states
    setFormFields(defaultFormField);
  };

  // Sign in using Google services:
  const SignInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //See if user is authenicated with email and password:
    try {
      dispatch(emailSignInStart(email, password));
      //Update the currentUser state with user's info:
      // setCurrentUser(user);

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;

        case "auth/user-not-found":
          alert("Email not found");
          break;

        default:
          console.log(err);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={SignInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
