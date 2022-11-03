import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>This is a Sign Page</h1>
      <button onClick={logGoogleUser}>Login with SignInWithGooglePopup</button>
    </div>
  );
};

export default SignIn;
