import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { ApiNasaReciente } from "../utils/ApiPaginacionNasa";
const Fotos = () => {
  const [dataNasa, setdataNasa] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiNasaReciente().then((data) => {
      setdataNasa(data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <section className="shop" id="fotos">
        <h1 className="heading">Las Fotos mas Reciente de Marte</h1>

        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            {loading ? (
              <Spinner />
            ) : (
              dataNasa.photos.map((noticia) => (
                <div className="swiper-slide slide" key={noticia.id}>
                  <div className="image">
                    <img src={noticia.img_src} alt="producto" />
                    <div className="icons">
                      <a href="#" className="fas fa-eye"></a>
                      <a href="#" className="fas fa-share"></a>
                    </div>
                  </div>
                  <div className="content">
                    <h3>{noticia.camera.name}</h3>
                    <div className="price"> {noticia.earth_date} </div>
                    <p>Sol: {noticia.sol}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
};

export default Fotos;
