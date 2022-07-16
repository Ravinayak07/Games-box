import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";

function NavBar() {
    return(
        <div className="navbar_container">
            <img className="navbar_logo" src={logo} alt="logo"/>
            <p className="navbar_title" >Games Box</p>
            <button className="navbar_button">Sign In</button>

        </div>

    )
}
export default NavBar;