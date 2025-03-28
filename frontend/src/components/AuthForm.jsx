import { useState } from "react";
import InputField from "./InputField";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AuthForm({
  title,
  buttonText,
  fields,
  onSubmit,
  setIsAuthenticated,
}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (name) => (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await onSubmit(formData);

      if (response.error) {
        throw new Error(response.error);
      }

      toast.success(response.message || "Success!", {
        duration: 3000,
        position: "bottom-left",
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
        iconTheme: { primary: "#4CAF50", secondary: "#fff" },
      });

      setIsAuthenticated(true);
      navigate("/home");
    } catch (error) {
      toast.error(error.message, {
        duration: 4000,
        position: "bottom-left",
        style: { borderRadius: "10px", background: "#ff4d4f", color: "#fff" },
        iconTheme: { primary: "#fff", secondary: "#ff4d4f" },
      });
    }

    setLoading(false);
  };

  return (
    <div className="card-container">
      <h1 className="card-title">{title}</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        {fields.map(({ name, type, placeholder }) => (
          <InputField
            key={name}
            type={type}
            placeholder={placeholder}
            value={formData[name]}
            setValue={handleChange(name)}
          />
        ))}
        <button type="submit" className="continue-button" disabled={loading}>
          {loading ? "Processing..." : buttonText}
        </button>
      </form>
    </div>
  );
}
