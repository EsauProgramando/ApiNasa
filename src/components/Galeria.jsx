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

  return (
    <>
      <section className="packages" id="galeria">
        <h1 className="heading">Galería de fotos</h1>
        {loading ? (
          <Spinner />
        ) : dataNasa.photos.length ? (
          dataNasa.photos.map((nasa, variable) => (
            <div className="box-container" key={nasa.id}>
              <input type="checkbox" id={`click${variable + 1}`} />
              <GaleriaItem
                index={variable + 1}
                key={nasa.id}
                nasa={nasa}
                pagina={pagina}
              />
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
