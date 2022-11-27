import fhaz from "../assets/images/fhaz.jpg";
import camara2 from "../assets/images/camara2.jpg";
import camara3 from "../assets/images/camara3.jpg";
import robert from "../assets/images/robert.jpg";
import { Link } from "react-router-dom";

const camaraN = "CHEMCAM";
const camaraN2 = "FHAZ";
const camaraN3 = "MARDI";
const camaraN4 = "RHAZ";
const Camarras = () => {
  return (
    <>
      <section className="category" id="camaras">
        <h1 className="heading">Registro de fotografías</h1>

        <div className="box-container">
          <div className="box">
            <img src={fhaz} alt="" />
            <h3>FHAZ</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              id.
            </p>

            <Link to={`/Nasa/camaradetalle/${camaraN2}`} className="btn">
              {" "}
              Ver más
            </Link>
          </div>

          <div className="box">
            <img src={camara2} alt="camara2" />
            <h3>RHAZ</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              id.
            </p>
            <Link to={`/Nasa/camaradetalle/${camaraN4}`} className="btn">
              {" "}
              Ver más
            </Link>
          </div>

          <div className="box">
            <img src={camara3} alt="camara3" />
            <h3>CHEMCAM</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              id.
            </p>
            <Link to={`/Nasa/camaradetalle/${camaraN}`} className="btn">
              {" "}
              Ver más
            </Link>
          </div>

          <div className="box">
            <img src={robert} alt="robert" />
            <h3>MAST</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              id.
            </p>
            <Link to={`/Nasa/camaradetalle/${camaraN3}`} className="btn">
              {" "}
              Ver más
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Camarras;
