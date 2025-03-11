import AuthForm from "./AuthForm";
import { signInApiCall } from "./api";
import "./styles.css";

export default function SignIn() {
  return (
    <AuthForm
      title="Sign in to Auth"
      buttonText="Sign In"
      fields={[
        { type: "text", placeholder: "Username", name: "username" },
        { type: "password", placeholder: "Password", name: "password" },
      ]}
      onSubmit={signInApiCall}
    />
  );
}
