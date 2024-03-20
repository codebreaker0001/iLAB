import { NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    window.localStorage.setItem("isLoggedIn", true);
    console.log(window.localStorage.getItem("isLoggedIn"));
    const p = window.location.origin;
    window.location.href = p;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-main">
      <div className="header-main-1">

        <div className="header-img">
          <img src="/logos/logo2.png" alt="" className="iLab-Logo" style={{height:"94px" , width:"194px"}} />
        </div>
        <div className="header-mid">
          <ul>
            <li><NavLink to="/" activeClassName="active" className="" >Home</NavLink></li>
            <li><NavLink to="/labreport" activeClassName="active" className="">Lab Report</NavLink></li>
            <li><NavLink to="/visualaid" activeClassName="active" className="">Visual Aid</NavLink></li>
            <li><NavLink to="/bodyChart" activeClassName="active" className="">Body Chart</NavLink></li>
            <li><NavLink to="/interpreter" className="">Smart Interpreter</NavLink></li>
          </ul>
        </div>
        <div className="header-end">
          <button onClick={handleClick} className="button" >Get Another Report</button>
        </div>
      </div>
    </div>
  );
}
