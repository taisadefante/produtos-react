import React from "react";
import styles from "./produto.module.css";
import { useParams } from "react-router-dom";
import Head from "../head/head";

const Produto = () => {
  const [produto, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProdutos(json);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <section className={styles.produto}>
      <Head
        title={`Renek | ${produto.nome}`}
        desciption={`Renek | Esse é um produto: ${produto.nome}`}
      />
      <div>
        {" "}
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>

      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={produto.descricao}>{produto.descricao}</p>
        <button className={styles.comprar}>Comprar</button>
      </div>
    </section>
  );
};

export default Produto;
