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
  const nasa1 = [];
  const nasa2 = [];
  const nasa3 = [];
  const nasa4 = [];
  const nasa5 = [];
  const nasa6 = [];
  const nasa7 = [];
  const nasa8 = [];
  const nasa9 = [];
  let nuevoArrayK = {};
  if (loading == false) {
    for (let i = 0; i < 3; i++) {
      nasa1.push(dataNasa.photos[i]);
    }

    for (let i = 3; i < 6; i++) {
      nasa2.push(dataNasa.photos[i]);
    }
    for (let i = 6; i < 9; i++) {
      nasa3.push(dataNasa.photos[i]);
    }
    for (let i = 9; i < 12; i++) {
      nasa4.push(dataNasa.photos[i]);
    }
    for (let i = 12; i < 15; i++) {
      nasa5.push(dataNasa.photos[i]);
    }
    for (let i = 15; i < 18; i++) {
      nasa6.push(dataNasa.photos[i]);
    }
    for (let i = 18; i < 21; i++) {
      nasa7.push(dataNasa.photos[i]);
    }
    for (let i = 21; i < 24; i++) {
      nasa8.push(dataNasa.photos[i]);
    }
    for (let i = 24; i < 25; i++) {
      nasa9.push(dataNasa.photos[i]);
    }

    const nuevoArrayKi = {
      0: nasa1,
      1: nasa2,
      2: nasa3,
      3: nasa4,
      4: nasa5,
      5: nasa6,
      6: nasa7,
      7: nasa8,
      8: nasa9,
    };
    nuevoArrayK = nuevoArrayKi;
  }

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
                {nuevoArrayK[index].map((data, index2) => (
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
            count={32}
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
