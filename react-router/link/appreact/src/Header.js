import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
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
