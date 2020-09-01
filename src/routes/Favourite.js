import React from "react";
import "./Favourite.css";
import Article from "../components/Article";

function Favourite(props)
{
  console.log(props.favouriteList[0])
  console.log(props.favouriteList[1])
  console.log(props.favouriteList[2])
  console.log(props.favouriteList[3])
return (
      <div className="movies">
            
      {props.favouriteList.map(article => (

        <Article
          _id={article[0]}
          web_url={article[1]}
          snippet = { article[2]}
          multimedia = {article[3]}
          favouriteList = {props.favouriteList}
          fromFavourite = {true}
        />
      ))}
    </div>
      );
    }

export default Favourite;