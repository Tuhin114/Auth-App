import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthPage from "./components/AuthPage";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";

function App() {
  const isAuthenticated = false; // Check if token exists

  return (
    <Router>
      <Nav />
      <Routes>
        {/* If authenticated, go to HomePage; otherwise, go to Login */}
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" /> : <AuthPage />}
        />
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
