import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import GamesList from "../../components/GamesList/GamesList";

function HomePage(){
    return(
        <div>
            <NavBar />
            <SearchBar />
            <GamesList />
            
        </div>
    )
}

export default HomePage;