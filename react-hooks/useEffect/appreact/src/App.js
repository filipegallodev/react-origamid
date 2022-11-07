import React from "react";
import Produto from "./Produto";

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <React.Fragment>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Clique</button>
    </React.Fragment>
  );
};

export default App;
