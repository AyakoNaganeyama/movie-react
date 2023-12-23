import React from "react";
const imgM = "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg";

const MovieCard = ({movie1}) => {

    return (
        <>


<div className="movie">
          <div>
            {movie1.release_date}
           


          </div>
          <div>
          <img src={imgM}/>
          </div>
          <div>
          <h3>{movie1.title}</h3>


          </div>


        </div>
        
        
        </>



    );





};

export default MovieCard;