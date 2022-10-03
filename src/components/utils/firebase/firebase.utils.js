/**
NOTE firebase/app: captures everything required to get firebase running.
NOTE initializeApp: creates an app instance based off of a config(object).
NOTE cofig/object allows us to attach the firebase app instance to the instance we have online (firebased created database (island-apperel db)). 
*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Anything related to authenication:
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

//firebase store imports:
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsqkkjmxJebT_-QuFYJEJG4n6B-UOhDy8",
  authDomain: "island-apparel-8d047.firebaseapp.com",
  projectId: "island-apparel-8d047",
  storageBucket: "island-apparel-8d047.appspot.com",
  messagingSenderId: "21631977982",
  appId: "1:21631977982:web:17ee70eb093b2b3d9458af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//enable us to use Google Authenication:
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//same authenication service will be used for this application:
export const auth = getAuth();

/* === Sign in with Google Redirect and Pop up option ===*/
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

//Use this to access database:
export const db = getFirestore();
//aysnc function that receives some users authenication object and stores it inside firestore:
export const createUSerDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  //See if there is an existing document reference (instance of a document model):
  const userDocRef = doc(db, "users", userAuth.uid); //Even if it does not exist, Google will still generate this object.

  //get data related to a document
  const userSnapshot = await getDoc(userDocRef);

  //check if document exist
  // console.log(userSnapshot.exists());

  //if user data does not exist, Will retunr true if it does not exist
  if (!userSnapshot.exists()) {
    //create / set the doucment with the data from userAuth in my collection:
    const { displayName, email } = userAuth;
    //Shows when user signed in:
    const createAt = new Date();
    //catch error with aysnc func:
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("Error creating the user", err.message);
    }
  }
  //if user data exist
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
