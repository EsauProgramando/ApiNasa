import "../App.css";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { Animaciones } from "../utils/Animaciones";

const NasaPage = () => {
  useEffect(() => {
    Animaciones();
  }, []);
  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  );
};

export default NasaPage;
