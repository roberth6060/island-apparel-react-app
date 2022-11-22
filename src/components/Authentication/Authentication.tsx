import SignUpForm from "../common/Form/SignUp";
import SignInForm from "../common/Form/SignIn";
import { AuthContainer } from "./style/Authentication";

const Authentication = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Authentication;
