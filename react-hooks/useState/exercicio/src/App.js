import React from "react";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick({ target }) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }
  // https://ranekapi.origamid.dev/json/api/produto/
  return (
    <React.Fragment>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </React.Fragment>
  );
};

export default App;
