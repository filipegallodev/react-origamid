import React from "react";
import { GlobalStorage } from "./GlobalContext";
import LimparDados from "./LimparDados";
import Produto from "./Produto";

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <LimparDados />
    </GlobalStorage>
  );
};

export default App;
