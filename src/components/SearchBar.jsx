import React from "react";
import { HiSearch } from "react-icons/hi"

function SearchBar(){
    return (
        <div className="flex">
            <HiSearch className="h-10"/> 
            <input type="text" name="search" id="search" placeholder="Search" className="ml-4 bg-header-dark-bg"/>
        </div>
    )
}

export default SearchBar;