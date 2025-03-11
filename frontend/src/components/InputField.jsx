import "./styles.css";

export default function InputField({ type, placeholder, value, setValue }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      className="input-field"
    />
  );
}
