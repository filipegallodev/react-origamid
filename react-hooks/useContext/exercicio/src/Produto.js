import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const { produto } = React.useContext(GlobalContext);

  if (produto) {
    return produto.map((produto) => (
      <li key={produto.id}>Produto: {produto.nome}</li>
    ));
  }
  return null;
};

export default Produto;
