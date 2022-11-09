import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  signInUserAuthFromEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.style";

const SignInForm = () => {
  const defaultFormField = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
  };

  const resetFormField = () => {
    setFormFields(defaultFormField);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInUserAuthFromEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("invalid password for the email");
          break;
        case "auth/user-not-found":
          alert("invalid email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>I have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
