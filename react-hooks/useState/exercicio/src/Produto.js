import React from "react";

const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <span>R$ {dados.preco}</span>
      <img
        style={{ margin: "1rem 0" }}
        src={dados.fotos[0].src}
        alt={dados.fotos[0].titulo}
      ></img>
      <p>{dados.descricao}</p>
    </div>
  );
};

export default Produto;
