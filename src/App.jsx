// App.jsx
import React, { useState, useRef } from "react";

// Importa los componentes desde tus librerías personalizadas
import { Head, Footer, Form, Card } from "../index.js";

const navItems = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Nosotros" },
  { href: "#contact", label: "Contacto" },
  { href: "#products", label: "Productos" },
];

const footerItems = [
  { href: "#privacy", label: "Política de privacidad" },
  { href: "#terms", label: "Términos de servicio" },
  { href: "#help", label: "Ayuda" },
  { href: "#support", label: "Soporte" },
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
  const [activeSection, setActiveSection] = useState("#home");
  const productsRef = useRef(null);

  const handleFormSubmit = (data) => {
    setFormResult(data);
    if (onSubmit) onSubmit(data);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (section === "#products" && productsRef.current) {
      setTimeout(() => {
        productsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100); // Espera a que se renderice
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900 flex flex-col">
      <Head
        logo="./src/assets/react.png"
        title="Libreria React"
        navItems={navItems}
        navClassName="flex gap-4 justify-center mb-4"
        onNavClick={handleNavClick}
      />
      <main style={{ padding: 25, flex: 1 }}>
        <h2 className="text-2xl font-bold text-center">
          Bienvenido a mi aplicación
        </h2>
        {activeSection !== "#products" && (
          <section>
            <h3 className="text-2l font-bold text-center">
              Formulario de acceso
            </h3>
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
        )}

        {activeSection === "#products" && (
          <section style={{ marginTop: 32 }}>
            <h3>Nuestros productos</h3>
            <div style={{ display: "flex", gap: 16 }}>
              {cardsData.map((card, idx) => (
                <Card key={idx} {...card} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer>
        &copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos
        reservados.
      </Footer>
    </div>
  );
}

export default App;
