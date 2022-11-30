import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";

const App = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm(false);
  const sobrenome = useForm(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (cep.validate() && email.validate() && nome.validate()) {
      return console.log("Enviou");
    }

    return console.log("Não enviou");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" type="text" id="nome" {...nome} />

      <Input label="Sobrenome" type="text" id="sobrenome" {...sobrenome} />

      <Input
        label="CEP"
        type="text"
        id="cep"
        placeholder="00000-000"
        {...cep}
      />

      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="email@example.com.br"
        {...email}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
