import React from "react";

const App = () => {
  function handleClick(event) {
    console.log(`Clicou! ${event.target.innerText}`);
  }

  function handleScroll(event) {
    console.log(event);
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div style={{ height: "200vh" }}>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
};

export default App;
