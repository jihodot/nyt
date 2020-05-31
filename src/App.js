import React from 'react';
import PropTypes from "prop-types";
function Food({name, picture, rating}){
  return <div>
    <h1>I like {name}</h1>
    <h1>rating {rating}</h1>
    <img src={picture} alt={name}/>
    </div>;
}

const foodILike = [
  {
    id:1,
    name: "kimch",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/10/10/e1d38d22a01a5f11619e141e089f66cb1.jpg",
    rating:1000
  },
  {
    id:2,
    name: "yoon dahye",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/10/10/e1d38d22a01a5f11619e141e089f66cb1.jpg",
    rating:10000
  },
  {
    id:3,
    name: "song jiho",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/10/10/e1d38d22a01a5f11619e141e089f66cb1.jpg",
    rating:1
  }
]


function renderFood(dish){
  console.log(dish);
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

Food.propTypes={

}
function App() {
  return <div>
      {foodILike.map(renderFood)}
    </div>
};

export default App;
