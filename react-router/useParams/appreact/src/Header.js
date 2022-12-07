import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log("Mudou a rota");
  }, [location]);

  return (
    <div>
      <h1>Header</h1>
      <NavLink to="/" end>
        Home
      </NavLink>
      {" | "}
      <NavLink to="sobre">Sobre</NavLink>
      {" | "}
      <NavLink to="login">Login</NavLink>
    </div>
  );
};

export default Header;
