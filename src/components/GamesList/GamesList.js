import React, { useEffect, useState } from "react";
import "./GamesList.css";
import axios from "axios";
import gaming from "../../images/gaming.webp";
import search from "../../images/search.png";
import { Users } from "../../user";

function GamesList() {
  const [GamesListData, setGamesListData] = useState([]);
  const [query, setQuery] = useState("");


  return (
    <>
      <div className="gameslist_container">
      <input
          className="searchbar_box"
          placeholder="Search Title here..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <table>
          <tr className="gamelist_header">
            <th>No.</th>
            <th>Title</th>
            <th>Platform</th>
            <th>Score</th>
            <th>Genre</th>
            <th>Editors Choice</th>
          </tr>

           {Users.filter((value) => value.title.includes(query)).map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.platform}</td>
              <td>{item.score}</td>
              <td>{item.genre}</td>
              <td>{item.editors_choice}</td>
            </tr>
          ))} 
        </table>
      </div>

       
    </>
  );
}

export default GamesList;
