import React from "react";
import Exemplo from "./Exemplo";

function reducer(state, action) {
  switch (action) {
    case "AUMENTAR":
      return state + 1;
    case "DIMINUIR":
      return state - 1;
    default:
      return new Error("Action não existe");
  }

  // if (action === "AUMENTAR") return state + 1;

  // if (action === "DIMINUIR") return state - 1;

  // return new Error("Action não existe");
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch("AUMENTAR")}>Mais</button>
      <button onClick={() => dispatch("DIMINUIR")}>Menos</button>
      <p>{state}</p>
      <Exemplo />
    </div>
  );
};

export default App;
