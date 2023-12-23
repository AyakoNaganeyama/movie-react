import React from "react";
//const imgM = "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg";

const MovieCard = ({m}) => {

    return (
        <>


<div className="movie">
          <div>
            {m.release_date}
           


          </div>
          {/* <div>
          <img src={imgM}/>
          </div> */}
          <div>
          <h3>{m.title}</h3>


          </div>


        </div>
        
        
        </>



    );





};

export default MovieCard;