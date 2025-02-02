import React from "react";
import styles from "./produtos.module.css";
import { Link } from "react-router-dom";
import Head from "../head/head";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;

  return (
    <section className={styles.produtos}>
      <Head title="Renek" desciption="Descrição do site Renek" />
      {produtos.map((produto) => (
        <Link to={`Produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
