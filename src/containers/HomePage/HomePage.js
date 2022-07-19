import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import GamesList from "../../components/GamesList/GamesList";
import Footer from "../../components/Footer/Footer";

function HomePage(){
    return(
        <div>
            <NavBar />
            <GamesList />
            <Footer />
            
        </div>
    )
}

export default HomePage;