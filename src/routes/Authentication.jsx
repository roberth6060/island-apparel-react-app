import SignUpForm from "../components/Form/SignUp";
import SignInForm from "../components/Form/SignIn";
import { AuthContainer } from "./styles/Authentication";

const Authentication = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};
export default Authentication;
