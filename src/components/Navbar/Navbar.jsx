import { useState } from "react";
import "./Navbar.module.css";

const Navbar = ({ items, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`menu ${isOpen ? "open" : ""}`}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => onClick && onClick(item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
