import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserFromAuth,
  signInUserAuthFromEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button.component/button.component";

import "./sign-in-form.style.scss";

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
      const response = await signInUserAuthFromEmailAndPassword(
        email,
        password
      );
      console.log(response);
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
    <div className="sign-up-container">
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
