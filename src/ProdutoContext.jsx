import { createContext, useState } from "react";

const ProdutoContext = createContext();

export const ProdutoProvider = ({ children }) => {
  const [produto, setProduto] = useState(null);
  const [produtos, setProdutos] = useState(null);
  const [busca, setBusca] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  return (
    <ProdutoContext.Provider
      value={{
        produto,
        setProduto,
        produtos,
        setProdutos,
        busca,
        setBusca,
        produtosFiltrados,
        setProdutosFiltrados,
      }}
    >
      {children}
    </ProdutoContext.Provider>
  );
};

export default ProdutoContext;
