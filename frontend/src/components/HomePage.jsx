import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Home Page 🎉</h1>
      <button
        onClick={handleLogout}
        style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
      >
        Logout
      </button>
    </div>
  );
}
