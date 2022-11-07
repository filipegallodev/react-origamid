import React from "react";

const Itens = ({ nome, propriedades }) => {
  return (
    <React.Fragment>
      <div
        style={{
          border: "1px solid",
          padding: "1rem",
          margin: "1rem 0",
        }}
      >
        {" "}
        <p>{nome}</p>
        <ul>
          {propriedades.map((propriedade) => {
            return <li key={propriedade}>{propriedade}</li>;
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Itens;
