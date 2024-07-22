import { useContext, useEffect } from "react";
import { GET_ALL_PRODUTOS, GET_PRODUTO } from "../api";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Produtos.module.css";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
import ProdutoContext from "../../ProdutoContext";
import { Error, Loading } from '../helper'

const Produtos = () => {
  const { request, error, loading } = useFetch();
  const navigate = useNavigate();
  const {
    produtos,
    setProdutos,
    busca,
    setBusca,
    produtosFiltrados,
    setProdutosFiltrados,
  } = useContext(ProdutoContext);

  useEffect(() => {
    const fetchProdutos = async () => {
      const { url } = GET_ALL_PRODUTOS();
      const { response, json } = await request(url);
      if (response.ok) setProdutos(json);
    };
    fetchProdutos();
  }, [request, setProdutos]);

  useEffect(() => {
    if (produtos) {
      const filtrados = produtos.filter(
        (produto) =>
          produto.id.toLowerCase().includes(busca.toLowerCase()) ||
          produto.descricao.toLowerCase().includes(busca.toLowerCase())
      );
      setProdutosFiltrados(filtrados);
    }
  }, [busca, produtos, setProdutosFiltrados]);

  const handleClick = (id) => {
    const { url } = GET_PRODUTO(id);
    console.log(url);
    navigate(`/produtos/${id}`);
  };

  const handleSearch = ({ target }) => {
    setBusca(target.value);
  };

  if (error) return <Error />
  if (loading) return <Loading />
  if (produtos)
    return (
      <section className="container">
        <h1 className="title">Lista de Produtos</h1>
        <Input
          value={busca}
          label="Encontre um produto"
          onChange={handleSearch}
        />
        <div className={`${styles.produtos} `}>
          {(busca ? produtosFiltrados : produtos).map((produto) => (
            <div
              onClick={() => handleClick(produto.id)}
              className={styles.produto}
              key={produto.id}
            >
              <img className={styles.fotos} src={produto.fotos[0].src} alt="" />
              <h2 className={styles.produtoNome}>{produto.id}</h2>
              <p>Preço: {produto.preco}</p>
              <p>{produto.descricao}</p>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Produtos;
