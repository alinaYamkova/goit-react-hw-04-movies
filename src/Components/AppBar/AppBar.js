import React from "react";
import Navigation from "../Navigation/Navigation";
import s from "../AppBar/appBar.module.css";

const AppBar = () => {
  return (
    <header className={s.AppBar}>
      <Navigation />
    </header>
  );
};

export default AppBar;
