import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";

import "./authentication.style.scss";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
