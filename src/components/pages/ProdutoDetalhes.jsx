import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GET_PRODUTO } from "../api";
import { useFetch } from "../../hooks/useFetch";
import styles from './ProdutosDetalhes.module.css'
import ProdutoContext from "../../ProdutoContext";
import { Error, Loading } from "../helper";

const ProdutoDetalhes = () => {
    const { id } = useParams();
    const { error, loading, request } = useFetch();
    const { produto, setProduto } = useContext(ProdutoContext)

    useEffect(() => {
        const fetchProduto =  async () => {
            const { url } = GET_PRODUTO(id);
            const { response, json } = await request(url);
            if (response.ok) setProduto(json)
        }
        fetchProduto()


    },[request, id, setProduto])

    if (error) return <Error error={error}/>
    if (loading) return <Loading loading={loading} />
    if(produto)
  return (
    <section>
         <div className={styles.produtoDetalhes}>
            <img src={produto.fotos[0].src} alt="" />
            <h2 className={styles.produtoNome}>{produto.id}</h2>
            <p className={styles.produtoPreco}>{produto.preco}</p>
            <p className={styles.produtoDescricao}>{produto.descricao}</p>
         </div>
    </section>
  )
}

export default ProdutoDetalhes