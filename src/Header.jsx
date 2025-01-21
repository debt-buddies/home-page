import React from "react";
import "./App.scss";

const Header = ({ withBtn = false, bgColor = "rgb(2, 190, 2)", title = "TODO APP", onClick = () => {} }) => {
  return (
    <div className="header" style={{ backgroundColor: bgColor }}>
      <span>{title}</span>
      {withBtn && <button className="btnPlus" onClick={onClick}>Buat to-do</button>}
    </div>
  );
};

export default Header;
