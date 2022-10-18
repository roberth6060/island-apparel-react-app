import SignUpForm from "../components/Form/SignUp";
import SignInForm from "../components/Form/SignIn";
import "./scss/Authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
