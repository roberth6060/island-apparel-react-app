import { useState, FormEvent, ChangeEvent } from "react";
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
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  //Reset the values in formFields:
  const resetFormFields = () => {
    //Set to empty states
    setFormFields(defaultFormField);
  };

  // Sign in using Google services:
  const SignInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent <HTMLFormElement>) => {
    event.preventDefault();

    //See if user is authenicated with email and password:
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error)
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
