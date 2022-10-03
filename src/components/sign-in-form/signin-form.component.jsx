/**
 * useState() Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application
 */

import { useState } from "react";
import {
  signInWithGooglePopup,
  createUSerDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);

  const { email, password } = formFields;

  //Reset the values in formFields:
  const resetFormFields = () => {
    //Set to empty states
    setFormFields(defaultFormField);
  };

  // Sign in using Google services:
  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUSerDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //See if user is authenicated with email and password:
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(response);
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
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button buttonType="inversed" type="submit">
            Sign in
          </Button>
          <Button type="button" buttonType="google" onClick={SignInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
