import AuthForm from "./AuthForm";
import { signUpApiCall } from "./api";
import "./styles.css";

export default function SignUp() {
  return (
    <AuthForm
      title="Sign up for Auth"
      buttonText="Sign Up"
      fields={[
        { type: "text", placeholder: "Full Name", name: "fullName" },
        { type: "text", placeholder: "Username", name: "username" },
        { type: "email", placeholder: "Work Email", name: "email" },
        { type: "password", placeholder: "Password", name: "password" },
      ]}
      onSubmit={signUpApiCall}
    />
  );
}
