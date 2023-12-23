
import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

function App() {

  const [movies,setM] = useState([]);


  const movie1 = {
    "adult": false,
    "backdrop_path": "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
    "genre_ids": [
        35,
        10751,
        14
    ],
    "id": 787699,
    "original_language": "en",
    "original_title": "Wonka",
    "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
    "popularity": 1035.485,
    "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    "release_date": "2023-12-06",
    "title": "Wonka",
    "video": false,
    "vote_average": 7.181,
    "vote_count": 425
}

const imgM = "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg";
  const searchMovie = async (title) => {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=269cc3c6e36c92b7c9e8327503a89d3d";


    // this sends get request to https://api.themoviedb.org. s is parapmater for search 
    const r = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=269cc3c6e36c92b7c9e8327503a89d3d`);
const data = await r.json();

setM(data.results);


}
useEffect(() => {searchMovie("Wonka");},[]);



  return (
    <div className="app">
      <h1>Ayako Movie</h1>
      <div className="search">

        <input placeholder="search title"  value="Superman" onChange={()=>{}}/>
        <img src={SearchIcon} alt="search" onClick={()=>{}}/>



      </div>

{
movies?.length >0?(

  <div className="container">

  <MovieCard movie1={movies[0]}/>


   </div>
):(

  <div className="empty">

    <h2>no movie found</h2>
  </div>
)


}
     
    
    </div>
  );
}

export default App;
