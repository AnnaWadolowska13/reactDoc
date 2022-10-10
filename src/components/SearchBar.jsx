import React from "react";
import { HiSearch } from "react-icons/hi"

function SearchBar(){
    return (
        <div className="flex">
            <HiSearch className="h-10"/> 
            <input type="text" name="search" id="search" placeholder="Search" 
                className="ml-4 bg-header-dark-bg placeholder:font-thin placeholder:text-lg text-lg font-thin focus:bg-gray-600"/>
        </div>
    )
}

export default SearchBar;