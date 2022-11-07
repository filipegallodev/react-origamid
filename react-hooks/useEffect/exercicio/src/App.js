import React from "react";
import Produto from "./Produto";

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    if (produto) {
      localStorage.setItem("preferencia", produto);
    } else {
      setProduto(localStorage.getItem("preferencia", produto));
    }
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <main>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: "1rem" }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </main>
  );
};

export default App;
