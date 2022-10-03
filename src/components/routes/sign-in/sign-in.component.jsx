/**
Prevent page from unmounting and remounting when using google redirect use: useEffect, getRedirectResult, auth
*/
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUSerDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/signup-form.component";

const Signin = () => {
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

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUSerDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}

      <SignUpForm />
    </div>
  );
};
export default Signin;
