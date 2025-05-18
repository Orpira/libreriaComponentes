import { useState } from "react";
import "./Form.module.css";

const Form = ({ onSubmit, formClassName }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Elimina espacios en blanco para la validación
    if (
      formData.nombre.trim() &&
      formData.email.trim() &&
      formData.password.trim()
    ) {
      setError("");
      setSuccess(`¡Hola ${formData.nombre}!`);
      onSubmit(formData);
    } else {
      setError("Por favor, completa todos los campos.");
      setSuccess("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className={formClassName}>
      <input
        type="text"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Enviar</button>
      {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
      {success && (
        <div
          data-testid="success-message"
          style={{ color: "green", marginTop: 8 }}
        >
          {success}
        </div>
      )}
    </form>
  );
};
export default Form;
