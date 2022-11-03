import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWAEqpapkFGpQOcEnIBh7NdPG6ssuniC0",
  authDomain: "crwn-clothing-db-c4d83.firebaseapp.com",
  projectId: "crwn-clothing-db-c4d83",
  storageBucket: "crwn-clothing-db-c4d83.appspot.com",
  messagingSenderId: "531904814198",
  appId: "1:531904814198:web:f68c4181b1a87ce8cb1357",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocref = doc(db, "users", userAuth.uid);
  console.log(userDocref);
  const userSnapShot = await getDoc(userDocref);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocref, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocref;
};
