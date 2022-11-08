import { useState, useContext } from "react";
import {
  createUserAuthFromEmailAndPassword,
  createUserFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

import "./sign-up-form.style.scss";

const SignUpForm = () => {
  const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormField = () => {
    setFormFields(defaultFormField);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const { user } = await createUserAuthFromEmailAndPassword(
          email,
          password
        );
        await createUserFromAuth(user, { displayName });
        resetFormField();
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("User already exists");
        }
        console.log(`error occured in user creation`, error);
      }
    } else {
      alert("passwords are not matching.");
      return;
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
