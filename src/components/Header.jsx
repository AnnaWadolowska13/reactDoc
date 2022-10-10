import React from "react";

import Logo from "./Logo";
import Tabs from "./Tabs";
import SearchBar from "./SearchBar";
import Info from "./Info";

function Header(){
    return (
    <header className="h-16 bg-header-dark-bg text-white flex items-center justify-around px-4" >
        <Logo/>
        <Tabs/>
        <SearchBar/>
        <Info/>
    </header>)
}

export default Header;