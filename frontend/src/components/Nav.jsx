import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { logOutCall } from "./api";
import githubLogo from "../assets/github-142-svgrepo-com.svg";
import "./styles.css";

const Nav = ({ isAuthenticated, setIsAuthenticated }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
          background: "#333",
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
        {isAuthenticated ? (
          <button
            type="submit"
            disabled={loading}
            className="logout-button"
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
            <img src={githubLogo} alt="GitHub" className="github-logo" />
          </a>
        )}
      </div>
      <div className="nav-base-line"></div>
    </div>
  );
};

export default Nav;
