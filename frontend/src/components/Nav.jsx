import React, { useState } from "react";
import "./api";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { logOutCall } from "./api";
import githubLogo from "../assets/github-142-svgrepo-com.svg";

const Nav = ({ isAuthenticated, setIsAuthenticated }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await logOutCall();
      console.log(response);
      localStorage.removeItem("isAuthenticated");
      setIsAuthenticated(false);

      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
    setLoading(false);
  };
  return (
    <div className="nav">
      <div className="nav-container">
        <h2 className="nav-title">Auth</h2>
        {isAuthenticated ? (
          <button
            type="submit"
            disabled={loading}
            className="logout-button"
            onClick={handleLogout}
          >
            Log out
          </button>
        ) : (
          <a
            href="https://github.com/Tuhin114/Auth-App"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <img src={githubLogo} alt="GitHub" className="github-logo" />
          </a>
        )}
      </div>
      <div className="nav-base-line"></div>
    </div>
  );
};

export default Nav;
