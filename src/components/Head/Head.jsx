import styles from "./Head.module.css";

const Head = ({ title, subtitle, logo }) => {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white shadow mb-8">
      <div className="flex items-center">
        {logo && (
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 object-contain ml-3"
            style={{ minWidth: 24, minHeight: 24 }}
          />
        )}
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <nav className="flex gap-4">
        <a href="#home">Inicio</a>
        <a href="#about">Nosotros</a>
      </nav>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </header>
  );
};

export default Head;
