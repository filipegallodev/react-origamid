import React from "react";

const titulo = <h1>Esse é um título</h1>;

const App = () => {
  const nome = "Filipe";
  const random = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome) {
    return "João " + sobrenome;
  }

  const carro = {
    marca: "Honda",
    rodas: 4,
  };

  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  };

  return (
    <React.Fragment>
      {titulo}
      <p>
        {true ? "True" : "False"} - {10} {mostrarNome("Marcos")}
      </p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p style={estiloP}>
        {carro.marca} {carro.rodas}
      </p>
      <p className={ativo ? "ativo" : "inativo"}>
        {nome}, {random * 100}
      </p>
    </React.Fragment>
  );
};

export default App;
