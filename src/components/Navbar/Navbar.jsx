import { useState } from "react";
import "./Navbar.module.css";

const Navbar = ({ items = [], onClick, navClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex gap-4 justify-center mb-4">
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      ></button>

      <div
        className={`menu ${
          isOpen ? "open" : ""
        } flex gap-4 justify-center font-bold`}
      >
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
