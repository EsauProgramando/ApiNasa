import { Link } from "react-router-dom";

const GaleriaItem = ({ nasa, data, pagina, index }) => {
  return (
    <>
      <label htmlFor={`click${nasa}`}>
        <div className="box">
          <div className="image slide">
            <img src={data?.img_src} alt="img3" />
            <div className="icons">
              <a href="#">
                <i className="fas fa-calendar"></i> {data?.earth_date}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-user"></i> {data?.rover?.status}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>
              {data?.camera?.name} {data?.id}
            </h3>
            <p>{data.img_src}</p>

            <Link
              to={`/Nasa/galeriadetalle/${data?.id}-${pagina}`}
              className="btn"
            >
              {" "}
              explore now
            </Link>
          </div>
        </div>
      </label>
    </>
  );
};

export default GaleriaItem;
