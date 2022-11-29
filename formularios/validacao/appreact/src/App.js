import React from "react";
import Input from "./Form/Input";

const App = () => {
  const [cep, setCep] = React.useState("");
  const [erro, setErro] = React.useState(null);

  function validateCep(value) {
    if (value.lenght === 0) {
      setErro("Preencha um valor");
      return false;
    }

    if (!/^\d{5}-?\d{3}$/.test(value)) {
      setErro("Preencha um CEP válido");
      return false;
    }

    setErro(null);
    return true;
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (erro) {
      validateCep(target.value);
    }

    setCep(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateCep(cep)) {
      return console.log("Enviou");
    }

    return console.log("Não enviou");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="CEP"
        id="cep"
        placeholder="00000-000"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {erro && <p>{erro}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
