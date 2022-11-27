import robert from "../assets/images/robert.jpg";
import alien from "../assets/images/alien.png";
import Spinner from "../components/Spinner";
import fhaz from "../assets/images/fhaz.jpg";
import NAVCAM from "../assets/images/NAVCAM.jpg";
import camara3 from "../assets/images/camara3.jpg";

import { ApifotoCamaraId } from "../utils/ApiPaginacionNasa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GaleriaDetalle = () => {
  const { id } = useParams();
  const [dataNasa, setdataNasa] = useState({});
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(id.split("-")[1]);
  const [iddataNasa, setiddataNasa] = useState(id.split("-")[0]);

  useEffect(() => {
    window.onscroll = () => {};

    window.onload = () => {};

    ApifotoCamaraId(pagina, iddataNasa).then((data) => {
      setdataNasa(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <section className="about detalle">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="image">
              <img src={dataNasa.img_src} alt="img3" />
            </div>

            <div className="content detalle-content">
              <h3>Detalle de la foto </h3>
              <p>
                Cada rover tiene su propio conjunto de fotos almacenadas en la
                base de datos, que se pueden consultar por separado. Hay varias
                consultas posibles que se pueden realizar contra la API. Las
                fotos están organizadas por el sol (rotación marciana o día) en
                el que fueron tomadas, contando desde la fecha de aterrizaje del
                rover.
              </p>
              <div className="campos">
                <h2 className="titulo">cámara:</h2>
                <p className="bord">{dataNasa.camera.name}</p>
                <h2 className="titulo">SOL:</h2>
                <p>{dataNasa.sol}</p>
              </div>
              <div className="campos">
                <h2 className="titulo">Fecha Tierra:</h2>
                <p className="bord">{dataNasa.earth_date}</p>
                <h2 className="titulo">Rover:</h2>
                <p>{dataNasa.rover.name}</p>
              </div>
              <div className="campos">
                <h2 className="titulo">Fecha de aterrizaje:</h2>
                <p className="bord">{dataNasa.rover.landing_date}</p>
                <h2 className="titulo">Fecha de lanzamiento:</h2>
                <p>{dataNasa.rover.launch_date}</p>
              </div>
              <div className="campos">
                <Link to={`/Nasa`} className="btn detalle-btn">
                  {" "}
                  Regresar
                </Link>
              </div>
            </div>
          </>
        )}
        <div className="image-float">
          <img src={alien} alt="alien" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GaleriaDetalle;
