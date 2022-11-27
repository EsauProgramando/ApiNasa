import "../assets/styles/NotFoundPage.css";
import { Link } from "react-router-dom";
import img1 from "../assets/images/img1.svg";
const NotFoundPage = () => {
  return (
    <>
      <div className="containerNotFound">
        <img className="img" src={img1} alt="notFoundPage" />
        <h1 id="dataN"></h1>
        <div className="botonNotFound">
          <Link className="btnNotFound" to="/Nasa">
            Volver atras
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
