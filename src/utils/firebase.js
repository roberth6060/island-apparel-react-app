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
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//firebase store imports:
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
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

/******** Create new database collection in firestore with productsData  ********/
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  //Creates batch to add objects to collection (instantiate batch class):
  const batch = writeBatch(db);
  //iterated over each individual object in array
  objectsToAdd.forEach((object) => {
    //Tells doc method which database is being using
    const docRef = doc(collectionRef, object.title.toLowerCase()); //firebase will give back document reference even if it doesnt exist

    batch.set(docRef, object);
  });
  await batch.commit();
};

//Gain access to collection firebase database
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  //gives array of individual docs and the snapshots are the actual data
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

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
  return userSnapshot;
};

/********************** Create interface layer (function) through helper function **********************/
//Sign up
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
//Sign in
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

//Sign out NOTE auth also keeps track of what users are signin
export const signOutUser = async () => await signOut(auth);
//Create a auth state change listener using cb
export const onAuthStateChangedListener = (cb) => onAuthStateChanged(auth, cb);

// Change from an observable listener to a promise base listerer function call
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        /** Resolve the moment auth is received  */
        resolve(userAuth);
      },
      reject
    );
  });
};
