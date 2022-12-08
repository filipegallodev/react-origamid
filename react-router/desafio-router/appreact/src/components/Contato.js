import React from "react";

import style from "./Contato.module.css";

import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={style.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Entre em contato." />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={style.dados}>
          <li>filipe@origamid.com</li>
          <li>(99) 99999-9999</li>
          <li>Avenida Brasil, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
