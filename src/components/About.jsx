import robert from "../assets/images/robert.jpg";

const About = () => {
  return (
    <>
      <section className="about" id="descripcion">
        <div className="image">
          <img src={robert} alt="robert" />
        </div>

        <div className="content">
          <h3>Rovers en Marte</h3>
          <p>
            Cada rover tiene su propio conjunto de fotos almacenadas en la base
            de datos, que se pueden consultar por separado. Hay varias consultas
            posibles que se pueden realizar contra la API. Las fotos están
            organizadas por el sol (rotación marciana o día) en el que fueron
            tomadas, contando desde la fecha de aterrizaje del rover.
          </p>
          <p>
            Además de consultar por fecha, los resultados también se pueden
            filtrar por la cámara con la que se tomaron y las respuestas se
            limitarán a 25 fotos por llamada.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
