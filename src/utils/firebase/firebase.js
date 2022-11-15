import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBUZGUBOwVUaIG1vlWGen0EQT8E1F3XOrM',
  authDomain: 'clothing-store-db-34bf8.firebaseapp.com',
  projectId: 'clothing-store-db-34bf8',
  storageBucket: 'clothing-store-db-34bf8.appspot.com',
  messagingSenderId: '594491485063',
  appId: '1:594491485063:web:9b7067a816c63acbcd0122',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//a class we get from firebase Authentication
//instantiating a new instance of this class , this can be different for different applications .
//you might need multiple providers / aka instances of the GoogleAuthProvider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

//this should be the same for every app
export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());
  //userSnapshot allows to see if this user exists in our database and allows us to access the data

  //check if user data exists
  if (!userSnapShot.exists()) {
    //if userSnapshot does exist
    //userSnapShot.exists() returns false usually, so if user does
    //exist it will return true
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log('error', err.message);
    }
  }
  return userDocRef;

  //if user data does not exist

  //return userDocRef
};
