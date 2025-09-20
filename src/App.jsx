import { Routes, Route } from "react-router-dom";
import "./App.css";
import Page from "./pages/HomePage";
import PokemonDetailPage from "./pages/PokemonDetail";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer"
function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
