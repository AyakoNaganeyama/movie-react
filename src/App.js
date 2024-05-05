
import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import YouTube from "react-youtube";
import TitleCard from "./TitleCard";

function App() {

  const [movies,setM] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  const [selectMovie,setSelectMovie] = useState("");
  


//   const movie1 = {
//     "adult": false,
//     "backdrop_path": "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
//     "genre_ids": [
//         35,
//         10751,
//         14
//     ],
//     "id": 787699,
//     "original_language": "en",
//     "original_title": "Wonka",
//     "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
//     "popularity": 1035.485,
//     "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
//     "release_date": "2023-12-06",
//     "title": "Wonka",
//     "video": false,
//     "vote_average": 7.181,
//     "vote_count": 425
// }

//const imgM = "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg";



const getTrends =async()=>{

   const urlMovieList = "https://api.themoviedb.org/3/discover/movie?api_key=269cc3c6e36c92b7c9e8327503a89d3d";
   const r1 = await fetch(urlMovieList);
   //  const r = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=269cc3c6e36c92b7c9e8327503a89d3d");
const data1 = await r1.json();
console.log(data1.results);
setM(data1.results);
setSearchTerm("Trending");



};
  const searchMovie = async (title) => {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=269cc3c6e36c92b7c9e8327503a89d3d";
   


    // this sends get request to https://api.themoviedb.org. s is parapmater for search 
     const r = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=269cc3c6e36c92b7c9e8327503a89d3d`);
    //  const r = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=269cc3c6e36c92b7c9e8327503a89d3d");
const data = await r.json();

setM(data.results);



}

const selectedMovie = async (id) =>{


  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=269cc3c6e36c92b7c9e8327503a89d3d&append_to_response=videos`;

    const r = await fetch(url);

const data = await r.json();

    // Check if data.results is an array and not empty
    // if (Array.isArray(data.results) && data.results.length > 0) {
    //   const trailer = data.results.find(v => v.name === "official trailer");

    //   if (trailer!=null ) {
    //     setSelectMovie(trailer.key);
    //   }
    //    else {
    //     console.warn("Official trailer not found for movie", id);
    //   }
    // } else {
    //   console.warn("No video results found for movie", id);
    // }

const trailer = data.results.find(v => v.name === "Official Trailer");
// console.log(data.results);
 setSelectMovie(trailer.key);




}
// const getVideos = async (id) => {
// const {data1} = await axios.get(`${urlMovieList}/${id}`);




// };




useEffect(() => {getTrends();},[]);

const s = {display: "flex"};



  return (
    <div className="app">
    <div style={s}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tmdb.new.logo.svg" width={100} height={100}/>
      <h1>AMovie</h1>
      
      </div>
      <YouTube videoId={selectMovie}/>
      <div className="search">

        <input placeholder="search title"  onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        <img src={SearchIcon} alt="search" onClick={()=>{searchMovie(searchTerm)}} />



      </div>


<div className="container" ><TitleCard title={searchTerm}/></div>

  <div className="container">
  


  {movies?.length > 0 ? (
  movies.map((movie) => (
    <MovieCard m={movie} key={movie.id} onClick={ () => selectedMovie(movie.id)} />
  ))
) : (
  <div className="empty">
    <h2>no movie found</h2>
  </div>
)}
    {/* <MovieCard m = {movies[2]}/> */}
  {/* {
movies?.length >0?(
    
    movies.map((movie) =>{

<MovieCard m = {movie}/>



    })

    ):(

      <div className="empty">
    
        <h2>no movie found</h2>
      </div>
    )}
     */}


   </div>



     
    
    </div>
  );
}

export default App;
