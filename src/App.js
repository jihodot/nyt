import React, {useState} from 'react';
import { HashRouter, Route } from "react-router-dom";
import Favourite from "./routes/Favourite";

import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App(){

  const [favouriteList, setFavouriteList] = useState([]);
  return (
    <HashRouter>
      <Navigation/>
      
      <Route path="/" exact={true} render={(props) => (
        <Home {...props} favouriteList = {favouriteList}/>
      )}/>
      <Route path="/favourite"  render={(props) => (
        <Favourite {...props} favouriteList = {favouriteList}/>
      )}/>

    </HashRouter>
    );
}

export default App;