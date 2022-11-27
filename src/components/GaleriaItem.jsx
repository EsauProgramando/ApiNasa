import { Link } from "react-router-dom";

const GaleriaItem = ({ nasa, index, pagina }) => {
  return (
    <>
      <div className="main">
        <label htmlFor={`click${index}`}>
          <div className="box">
            <div className="image slide">
              <img src={nasa.img_src} alt="img3" />
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"></i> {nasa.earth_date}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user"></i> {nasa.rover.status}
                </a>
              </div>
            </div>
            <div className="content">
              <h3>
                {nasa.camera.name} {nasa.id}
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam, eos.
              </p>

              <Link
                to={`/Nasa/galeriadetalle/${nasa.id}-${pagina}`}
                className="btn"
              >
                {" "}
                explore now
              </Link>
            </div>
          </div>
        </label>
      </div>
    </>
  );
};

export default GaleriaItem;
