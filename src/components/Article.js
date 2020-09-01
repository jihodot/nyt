import React, {useState} from "react";
import {Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Article.css";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
function Article({ _id,   web_url,snippet,multimedia , favouriteList, fromFavourite}) {
  var image;

  if (Array.isArray(multimedia))
  {
    if (multimedia.length >0)
      image = multimedia[0].url;
    else
      image = "";
  }

  const addFavouriteList = (event) => {
    // event.preventDefault();
    const addItem = [_id,web_url, snippet, multimedia ]
    favouriteList.push(addItem)   
  };

  const deleteFavouriteList = (event) => {

    // event.preventDefault();
    for (var i = favouriteList.length - 1; i >= 0; i--) {
      if (favouriteList[i][0] == _id) { 
        favouriteList.splice(i, 1);
        window.location.href = "/";

      }
    }
  };
  var url = `https://www.nytimes.com/${image}`;

  return (
    <div className="movie">

    
      <div >
        <br></br>
        <a href = {web_url}><img  src = {url}/>{snippet.slice(0, 30) + "...more"}</a>
          {/* {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))} */}
          {!fromFavourite?<button onClick={addFavouriteList}>즐겨찾기</button>
                        :<button onClick={deleteFavouriteList} href="/">즐겨찾기 해제</button>

          }
      </div>
    
    </div>
  );
}

Article.propTypes = {
  _id: PropTypes.string.isRequired,
  pub_date: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  web_uri: PropTypes.string.isRequired,
  lead_paragraph: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
};



export default Article;
