import React from "react";
import { useState } from "react";
//const imgM = "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg";
// https://api.themoviedb.org/3/movie/572802/videos?language=en-US&api_key=269cc3c6e36c92b7c9e8327503a89d3d




const MovieCard = ({m}) => {



    return (
        <>


<div className="movie">
          <div>
            {m.release_date}
           


          </div>
           <div>
          <img src={'https://image.tmdb.org/t/p/w500' + m.poster_path}/>
          </div> 
          <div>
          <h3>{m.title}</h3>


          </div>


        </div>
        
        
        </>



    );





};

export default MovieCard;