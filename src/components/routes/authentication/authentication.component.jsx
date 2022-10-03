import SignUpForm from "../../sign-up-form/signup-form.component";
import SignInForm from "../../sign-in-form/signin-form.component";

const Authentication = () => {
  //Empty array means run this function once when Signin component mounts:
  /**
  tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. */
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUSerDocumentFromAuth(response.user);
  //     }
  //   };
  //   fetchData().catch(console.error);
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
