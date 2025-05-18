// App.jsx
import React, { useState } from "react";

// Importa los componentes desde tus librerías personalizadas
import { Head, Footer, Form, Card } from "../index.js";

const navItems = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Nosotros" },
  { href: "#contact", label: "Contacto" },
];

const cardsData = [
  {
    title: "Producto 1",
    content: "Descripción del producto 1.",
    image: "./src/assets/react.png",
  },
  {
    title: "Producto 2",
    content: "Descripción del producto 2.",
    image: "./src/assets/Vitest.png",
  },
];

function App({ onSubmit }) {
  const [formResult, setFormResult] = useState(null);

  const handleFormSubmit = (data) => {
    setFormResult(data);
    if (onSubmit) onSubmit(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Head logo="./src/assets/Vitest.png" title="Mi sitio web" />
      <main style={{ padding: 50 }}>
        <h2>Bienvenido a mi aplicación</h2>
        <section>
          <h3>Formulario de acceso</h3>
          <Form
            onSubmit={handleFormSubmit}
            formClassName="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          />
          {formResult && (
            <div style={{ marginTop: 16 }}>
              <div>¡Hola {formResult.nombre}!</div>
              <div>Nombre: {formResult.nombre}</div>
              <div>Email: {formResult.email}</div>
            </div>
          )}
        </section>

        <section style={{ marginTop: 32 }}>
          <h3>Nuestros productos</h3>
          <div style={{ display: "flex", gap: 16 }}>
            {cardsData.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </div>
        </section>
      </main>

      <Footer>
        &copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos
        reservados.
      </Footer>
    </div>
  );
}

export default App;
