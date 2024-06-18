import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./components/produtos/produtos";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Contato from "./components/contato/contato";
import Produto from "./components/produto/produto";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="produto/:id" element={<Produto />} />

          <Route path="contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
