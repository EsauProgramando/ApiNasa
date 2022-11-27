const CamadetalleItem = ({ noticia }) => {
  return (
    <>
      <label htmlFor="click2">
        <div className="box">
          <div className="image slide">
            <img src={noticia.img_src} alt="img3" />
            <div className="icons">
              <a href="#">
                {" "}
                <i className="fas fa-calendar"></i> {noticia.earth_date}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-user"></i> {noticia.rover.status}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>{noticia.camera.name}</h3>
            <p>{noticia.camera.full_name}</p>
          </div>
        </div>
      </label>
    </>
  );
};

export default CamadetalleItem;
