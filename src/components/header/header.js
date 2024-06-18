import React from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.links} to="/" end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.links} to="contato">
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
