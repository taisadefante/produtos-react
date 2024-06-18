import React from "react";
import styles from "./contato.module.css";
import foto from "../../img/contato.jpg";
import Head from "../head/head";

const Contato = () => {
  return (
    <section className={styles.contato}>
      <Head title="Renek | Contato" description="Entre em contato" />
      <img src={foto} alt="Imagem contato" />
      <div>
        <h1>Entre em Contato</h1>
        <ul className={styles.dados}>
          <li>tais@hotmail.com</li>
          <li>(21) 9999-9999</li>
          <li>Rua ali. 500 - RJ</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
