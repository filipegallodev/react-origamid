import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form/Form";

const Teste = () => {
  const active = false;

  if (active) {
    return <p>Teste</p>;
  }
  return null;
};

const App = () => {
  return (
    <React.Fragment>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default App;
