import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHg9ONpR0dOlek8AyWBHJuye3RD94l6K4",
  authDomain: "crwn-clothing-db-88df3.firebaseapp.com",
  projectId: "crwn-clothing-db-88df3",
  storageBucket: "crwn-clothing-db-88df3.appspot.com",
  messagingSenderId: "205701615678",
  appId: "1:205701615678:web:6f181d586d4c6a935a016f",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);

export const createUserFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  const userData = {
    displayName: userAuth.displayName,
    userId: userAuth.uid,
    createAt: new Date(),
  };
  if (!userSnapshot.exists()) {
    try {
      await setDoc(userDocRef, userData);
    } catch (error) {
      console.log(`error creating the user ${error.message}`);
      console.log(error.code);
    }
    return userDocRef;
  }
};
