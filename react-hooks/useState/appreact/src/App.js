import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <React.Fragment>
      <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </React.Fragment>
  );
};

export default App;
