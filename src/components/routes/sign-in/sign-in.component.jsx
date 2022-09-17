import {
  signInWithGooglePopup,
  createUSerDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUSerDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
};
export default Signin;
