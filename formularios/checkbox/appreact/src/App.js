import React from "react";
import Checkbox from "./Form/Checkbox";

const App = () => {
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState("");

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={["Li e aceito os termos."]}
        value={termos}
        setValue={setTermos}
      />

      <h2>Checkbox</h2>
      <Checkbox
        options={["JavaScript", "PHP", "Ruby"]}
        value={linguagens}
        setValue={setLinguagens}
      />
    </form>
  );
};

export default App;
