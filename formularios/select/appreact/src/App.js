import React from "react";
import Select from "./Form/Select";

const App = () => {
  const [produto, setProduto] = React.useState("");

  return (
    <form>
      <Select
        options={["Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
    </form>
  );
};

export default App;
