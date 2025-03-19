import { useEffect, useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import "./styles.css";

export default function AuthPage({ setIsAuthenticated }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [darkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="container">
      {isSignUp ? (
        <SignUp setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <SignIn setIsAuthenticated={setIsAuthenticated} />
      )}
      <div className="footer">
        <div onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </div>
      </div>
    </div>
  );
}
