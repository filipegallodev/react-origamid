import React from "react";
import Navegation from "./components/Navegation/Navegation";
import Home from "./components/Home/Home";
import Produtos from "./components/Produtos/Produtos";

const App = () => {
  const Pagina =
    window.location.href === "http://localhost:3000/produtos" ? Produtos : Home;

  return (
    <React.Fragment>
      <Navegation />
      <Pagina />
    </React.Fragment>
  );
};

export default App;
