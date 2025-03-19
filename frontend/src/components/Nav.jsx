import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { logOutCall } from "./api";
import githubLogoLight from "../assets/github-142-svgrepo-com.svg";
import githubLogoDark from "../assets/github-svgrepo-com.svg";

import sunlogo from "../assets/sun-svgrepo-com.svg";
import moonlogo from "../assets/moon-svgrepo-com.svg";

import "./styles.css";

const Nav = ({ isAuthenticated, setIsAuthenticated }) => {
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logOutCall();
      localStorage.removeItem("isAuthenticated");
      setIsAuthenticated(false);

      toast.success("Logged out successfully!", {
        duration: 3000,
        position: "bottom-left",
        style: {
          borderRadius: "10px",
          background: darkMode ? "#222" : "#333",
          color: "#fff",
        },
      });

      navigate("/");
    } catch {
      toast.error("Logout failed. Please try again!", {
        duration: 3000,
        position: "bottom-left",
        style: {
          borderRadius: "10px",
          background: "#ff4d4f",
          color: "#fff",
        },
      });
    }
    setLoading(false);
  };

  return (
    <div className="nav">
      <div className="nav-container">
        <h2 className="nav-title">Auth</h2>
        <div className="nav-buttons">
          <button onClick={toggleDarkMode} className="dark-mode-button">
            {darkMode ? (
              <img src={sunlogo} alt="light mode" className="github-logo" />
            ) : (
              <img src={moonlogo} alt="dark mode" className="github-logo" />
            )}
          </button>
          {isAuthenticated ? (
            <button
              type="submit"
              disabled={loading}
              className="continue-button logout"
              onClick={handleLogout}
            >
              {loading ? "Logging out..." : "Log out"}
            </button>
          ) : (
            <a
              href="https://github.com/Tuhin114/Auth-App"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              {darkMode ? (
                <img
                  src={githubLogoDark}
                  alt="GitHub"
                  className="github-logo"
                />
              ) : (
                <img
                  src={githubLogoLight}
                  alt="GitHub"
                  className="github-logo"
                />
              )}
            </a>
          )}
        </div>
      </div>
      <div className="nav-base-line"></div>
    </div>
  );
};

export default Nav;
