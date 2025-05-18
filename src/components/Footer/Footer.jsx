import React from "react";

const Footer = ({ children }) => (
  <footer className="bg-gray-800 text-white py-4 text-center">
    <div className="flex gap-4 justify-center mb-4">
      <a href="#privacy">Política de privacidad</a>
      <a href="#terms">Términos de servicio</a>
      <a href="#help">Ayuda</a>
      <a href="#support">Soporte</a>
    </div>
    {children}
  </footer>
);
export default Footer;
