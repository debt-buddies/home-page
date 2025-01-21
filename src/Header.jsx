import React from "react";
import "./App.scss";

const Header = ({ withBtn = false, bgColor = "rgb(2, 190, 2)" }) => {
  return (
    <div className="header" style={{ backgroundColor: bgColor }}>
      <span>TODO APP</span>
      {withBtn && <button className="btnPlus">Buat to-do</button>}
    </div>
  );
};

export default Header;
