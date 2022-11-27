import cohete from "../assets/images/cohete.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={cohete} alt="logo" /> API de la NASA{" "}
        </a>
        <input
          type="checkbox"
          name=""
          id="nav-toggler"
          className="fas fa-bars"
        />
        <nav className="navbar">
          <a href="#inicio" data-text="Inicio">
            Inicio
          </a>
          <a href="#camaras" data-text="Cámaras">
            Cámaras
          </a>
          <a href="#descripcion" data-text="Descripción">
            Descripción
          </a>
          <a href="#fotos" data-text="Fotos">
            Fotos
          </a>
          <a href="#galeria" data-text="Galería">
            Galería
          </a>
          <div className="background-image"></div>
        </nav>
      </header>
    </>
  );
};

export default Header;
