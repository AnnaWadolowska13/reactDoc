import React from "react";
import logo from "../logo.svg";

function Logo(){
    return (
    <p className="w-10 flex" >
        <img src={logo} alt="logo" />
        <span className="text-react-blue font-bold text-lg">React</span>
    </p>)
}

export default Logo;