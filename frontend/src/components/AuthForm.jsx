import { useState } from "react";
import InputField from "./InputField";
import "./styles.css";

export default function AuthForm({ title, buttonText, fields, onSubmit }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (name) => (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await onSubmit(formData);
      if (response.success) {
        alert("Success! Redirecting...");
      } else {
        setError(response.message || "Something went wrong.");
      }
    } catch {
      setError("Failed to connect to the server.");
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="continue-button" disabled={loading}>
          {loading ? "Processing..." : buttonText}
        </button>
      </form>
    </div>
  );
}
