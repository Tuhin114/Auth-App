import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthPage from "./components/AuthPage";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // 🔥 Save authentication state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <Nav
        setIsAuthenticated={setIsAuthenticated}
        isAuthenticated={isAuthenticated}
      />
      <Routes>
        {/* If authenticated, go to HomePage; otherwise, go to Login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <AuthPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <HomePage setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
