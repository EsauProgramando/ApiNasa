const ApiPaginacionNasa = async (page) => {
  const apiNasa = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const respuesta = await fetch(apiNasa);
  const data = await respuesta.json();
  return data;
};

const ApifotoCamara = async (camara) => {
  const apiNasa = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camara}&api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const respuesta = await fetch(apiNasa);
  const data = await respuesta.json();
  return data;
};
const ApifotoCamaraId = async (page, iddataNasa) => {
  const apiNasa = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const respuesta = await fetch(apiNasa);
  const data = await respuesta.json();
  const dataNasa = data.photos.filter((item) => item.id === Number(iddataNasa));

  return dataNasa[0];
};
const ApiNasaReciente = async () => {
  const apiNasa = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-11-24&api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const respuesta = await fetch(apiNasa);
  const data = await respuesta.json();
  return data;
};
export { ApiPaginacionNasa, ApifotoCamara, ApifotoCamaraId, ApiNasaReciente };
