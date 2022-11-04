import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const array = ["Item 1", "Item 2"];

  return (
    <form>
      <Input id="email" label="Email" required />
      <Input id="password" type="password" label="Senha" />
      <Button items={array} />
    </form>
  );
};

export default Form;
