import React from "react";

const App = () => {
  const [contador, setContador] = React.useState(1);
  const [itens, setItens] = React.useState(["Item 1"]);

  function handleClick() {
    setContador(contador + 1);
    setItens([...itens, "Item " + (contador + 1)]);
  }

  return (
    <div>
      <ul>
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>{contador}</button>
    </div>
  );
};

export default App;
