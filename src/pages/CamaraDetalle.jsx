import depredador2 from "../assets/images/depredador2.png";
import Footer from "../components/Footer";
import CamadetalleItem from "../components/CamadetalleItem";
import Spinner from "../components/Spinner";

import { ApifotoCamara } from "../utils/ApiPaginacionNasa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
const CamaraDetalle = () => {
  const [camara, setCamara] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    window.onscroll = () => {};

    window.onload = () => {};

    ApifotoCamara(id).then((data) => {
      setCamara(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <section className="shop" id="fotos">
        <h1 className="heading">Cárama</h1>
      </section>

      <section className="packages detalle-galeria" id="galeria">
        <h1 className="heading">Galería de fotos</h1>
        <div className="campos">
          <Link to={`/Nasa`} className="btn detalle-btn">
            {" "}
            Regresar
          </Link>
        </div>

        <div className="box-container">
          <input type="checkbox" id="click2" />

          <div className="main">
            {loading ? (
              <Spinner />
            ) : camara.photos.length ? (
              camara.photos.map((noticia) => (
                <CamadetalleItem key={noticia.id} noticia={noticia} />
              ))
            ) : (
              <div className="loading">No hay datos</div>
            )}
          </div>
        </div>

        <div className="image-float">
          <img src={depredador2} alt="depredador2" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CamaraDetalle;
