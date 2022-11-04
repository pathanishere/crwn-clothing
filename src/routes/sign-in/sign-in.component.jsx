import {
  signInWithGooglePopup,
  createUserFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const loginWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserFromAuth(user);
  };
  return (
    <>
      <h1>Sign In route</h1>
      <button onClick={loginWithGoogle}>Sigin with Google</button>
    </>
  );
};

export default SignIn;
