import AuthForm from "./AuthForm";
import { signUpApiCall } from "./api";
import "./styles.css";

export default function SignUp({ setIsAuthenticated }) {
  return (
    <AuthForm
      title="Sign up for Auth"
      buttonText="Sign Up"
      setIsAuthenticated={setIsAuthenticated}
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
