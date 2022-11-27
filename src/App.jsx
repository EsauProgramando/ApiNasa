import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NasaPage from "./pages/NasaPage";
import NotFoundPage from "./pages/NotFoundPage";
import CamaraDetalle from "./pages/CamaraDetalle";
import GaleriaDetalle from "./pages/GaleriaDetalle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Navigate to="/Nasa" />} />
        <Route index path="/Nasa" element={<NasaPage />} />
        <Route path="/Nasa/camaradetalle/:id" element={<CamaraDetalle />} />
        <Route path="/Nasa/galeriadetalle/:id" element={<GaleriaDetalle />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
