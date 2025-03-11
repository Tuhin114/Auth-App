import { useState } from "react";
import "./AuthPage.css";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <div className="container">
      {isSignUp ? <SignUpPage /> : <SignInPage />}
      <div className="footer">
        <div>
          {isSignUp ? (
            <div
              onClick={() => {
                setIsSignUp(false);
              }}
            >
              Already have account? Sign In
            </div>
          ) : (
            <div
              onClick={() => {
                setIsSignUp(true);
              }}
            >
              Don't have an account? Sign Up
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const InputField = ({ type, placeholder, value, setValue }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => setValue(e.target.value)}
    className="input-field"
  />
);

const AuthForm = ({ title, buttonText, fields }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="">
      <main className="main">
        <div className="card-container">
          <h1 className="card-title">{title}</h1>
          <div className="form-container">
            {fields.map(({ type, placeholder, name }) => (
              <InputField
                key={name}
                type={type}
                placeholder={placeholder}
                value={formData[name] || ""}
                setValue={handleChange(name)}
              />
            ))}
            <button className="continue-button">{buttonText}</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export const SignUpPage = () => (
  <AuthForm
    title="Sign up for Auth"
    buttonText="Continue"
    fields={[
      { type: "text", placeholder: "Full Name", name: "fullName" },
      { type: "text", placeholder: "Username", name: "username" },
      { type: "email", placeholder: "Work Email", name: "email" },
      { type: "password", placeholder: "Password", name: "password" },
    ]}
  />
);

export const SignInPage = () => (
  <AuthForm
    title="Sign in to Auth"
    buttonText="Continue"
    fields={[
      { type: "text", placeholder: "Username", name: "username" },
      { type: "password", placeholder: "Password", name: "password" },
    ]}
  />
);
