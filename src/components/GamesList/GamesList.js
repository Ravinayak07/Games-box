import React, {useEffect, useState} from "react";
import "./GamesList.css";
import gaming from "../../images/gaming.webp";


function GamesList() {

    const [GamesListData, setGamesListData] = useState([]);

    useEffect(()=>{

    fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json")
    .then(res=>res.json())
    .then(data=>setGamesListData(data))
    .catch(error=>console.log(error))

    },[]);

    
    return(
        <div className="gameslist_container">
            {GamesListData.map((value,key)=>(
            <div className="gameslist_container_box">
                <img className="gameslist_container_box_image" src={gaming}  />
                <p>Title: <span className="gameslist_container_box_title">{value.title}</span></p>
                <p>Platform: <span className="gameslist_container_box_platform">{value.platform}</span></p>
                <p>Score: <span className="gameslist_container_box_score">{value.score}</span></p>
                <p>Genre: <span className="gameslist_container_box_genre">{value.genre}</span></p>
                <p>Editors_Choice <span className="gameslist_container_box_choice">{value.editors_choice}</span></p>
            </div>
            ))}
        </div>
    )
}

export default GamesList;