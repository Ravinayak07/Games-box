import React from "react";
import "./SearchBar.css";
import search from "../../images/search.png"

function SearchBar() {
    return(
        <div className="searchbar_container">
            <input className="searchbar_box" placeholder="search here..." />
            <img src={search} alt="search_logo" />
        </div>

    )
}

export default SearchBar;