import { useState, useEffect } from "react";
import { ApiPaginacionNasa } from "../utils/ApiPaginacionNasa";
import Pagination from "@mui/material/Pagination";
import Spinner from "../components/Spinner";
import GaleriaItem from "./GaleriaItem";
import Stack from "@mui/material/Stack";
const Galeria = () => {
  const [dataNasa, setdataNasa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    ApiPaginacionNasa(pagina).then((data) => {
      setdataNasa(data);
      setLoading(false);
    });
  }, [pagina]);

  const handleChangePagina = (e, valor) => {
    setPagina(valor);
  };
  let nasa0 = [];
  let nasa1 = [];
  let nasa2 = [];
  let nasa3 = [];
  let nasa4 = [];
  let nasa5 = [];
  let nasa6 = [];
  let nasa7 = [];
  let nasa8 = [];
  let nuevoArrayK1 = [];

  var incioCont = 0;
  var cant = 3;
  if (loading == false) {
    var divisiones = Math.floor(dataNasa.photos.length / cant);
    var divisionesSobra = Math.ceil(dataNasa.photos.length / cant);

    for (let i = 0; i < divisiones; i++) {
      for (let j = incioCont; j < cant + incioCont; j++) {
        eval("nasa" + i + ".push(dataNasa.photos[" + j + "])");
        //incioCont++
      }

      incioCont += cant;
      eval("nuevoArrayK1.push(nasa" + i + ")");
    }

    if (dataNasa.photos.length % cant != 0) {
      for (
        let k = incioCont;
        k < incioCont + (divisionesSobra - divisiones);
        k++
      ) {
        eval("nasa" + divisiones + ".push(dataNasa.photos[" + k + "])");
      }
    }
    if (nuevoArrayK1.length == divisiones) {
      eval("nuevoArrayK1.push(nasa" + divisiones + ")");
    }
  }
  const array = [];
  for (let i = 1; i <= divisionesSobra; i++) {
    array.push(i);
  }

  return (
    <>
      <section className="packages" id="galeria">
        <h1 className="heading">Galería de fotos</h1>
        {loading ? (
          <Spinner />
        ) : dataNasa.photos.length ? (
          array.map((nasa, index) => (
            <div className="box-container" key={nasa}>
              <input type="checkbox" id={`click${nasa}`} />
              <div className="main">
                {nuevoArrayK1[index].map((data, index2) => (
                  <GaleriaItem
                    key={index2}
                    data={data}
                    nasa={nasa}
                    index={index + 1}
                    pagina={pagina}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="heading">No hay datos</div>
        )}
        <Stack
          sx={{
            marginY: 5,
          }}
          spacing={4}
          direction={"row"}
          justifyContent="center"
          alignItems="center"
        >
          <Pagination
            count={36}
            color="primary"
            onChange={handleChangePagina}
            page={pagina}
            size="large"
          />
        </Stack>
      </section>
    </>
  );
};

export default Galeria;
