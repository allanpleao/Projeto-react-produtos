import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Logo, NavLinks } from './components/header'
import { Home, Produtos, SignIn } from './components/pages'
import ProdutoDetalhes from "./components/pages/ProdutoDetalhes";
import { ProdutoProvider } from "./ProdutoContext";

function App() {
  return (
    <>
      <BrowserRouter>
      <ProdutoProvider>
          <div className="App">
            <Header />
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/Produtos/*"} element={<Produtos />} />
              <Route path={"/signIn"} element={<SignIn />} />
              <Route path={"/produtos/:id"} element={<ProdutoDetalhes />} />
            </Routes>
          </div>
      </ProdutoProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
