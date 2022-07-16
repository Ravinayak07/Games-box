import React, { useEffect, useState } from "react";
import "./GamesList.css";
import gaming from "../../images/gaming.webp";
import search from "../../images/search.png";
import { Users } from "./user";

function GamesList() {
  const [GamesListData, setGamesListData] = useState([]);
  const [query, setQuery] = useState("");
  //console.log(query);

  useEffect(() => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    )
      .then((res) => res.json())
      .then((data) => setGamesListData(data))
      .catch((error) => console.log(error));
  }, []);

  //console.log(Users.filter(value=>value.title.includes("Litt")));

  return (
    <>
      <div className="searchbar_container">
        <input
          className="searchbar_box"
          placeholder="search here..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <img src={search} alt="search_logo" />
      </div>
      <div className="gameslist_container">
        {Users.filter((value) => value.title.includes(query)).map(
          (value, key) => (
            <div className="gameslist_container_box">
              <img className="gameslist_container_box_image" src={gaming} />
              <p>
                Title:{" "}
                <span className="gameslist_container_box_title">
                  {value.title}
                </span>
              </p>
              <p>
                Platform:{" "}
                <span className="gameslist_container_box_platform">
                  {value.platform}
                </span>
              </p>
              <p>
                Score:{" "}
                <span className="gameslist_container_box_score">
                  {value.score}
                </span>
              </p>
              <p>
                Genre:{" "}
                <span className="gameslist_container_box_genre">
                  {value.genre}
                </span>
              </p>
              <p>
                Editors_Choice{" "}
                <span className="gameslist_container_box_choice">
                  {value.editors_choice}
                </span>
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default GamesList;
