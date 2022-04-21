import React from 'react';

const Movie = ({movie}) => {
    return (
        <div className='movie'>
            <img src={movie.poster_path ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path : ""} alt="" />
            <h1>Titre : {movie.title} <br /> <br /> Date : {movie.release_date} <br /> <br /> Note : {movie.vote_average}  <br /> <br /> adult : {movie.adult.toString()}</h1>
        </div>
    );
};

export default Movie;