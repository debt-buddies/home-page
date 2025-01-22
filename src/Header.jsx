import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";

const Header = ({ withBtn = false, bgColor = "rgb(2, 190, 2)", title = "TODO APP", onClick = () => {} }) => {
  return (
    <div className="header" style={{ backgroundColor: bgColor }}>
      <span>{title}</span>
      <nav>
        <Link to="/onepack">Onepack</Link>
      </nav>
      {withBtn && (
        <button className="btnPlus" onClick={onClick}>
          Buat to-do
        </button>
      )}
    </div>
  );
};

export default Header;
