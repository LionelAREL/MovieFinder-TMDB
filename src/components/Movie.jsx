import React from 'react';

const Movie = ({movie}) => {
    return (
        <div>
            <img src={movie.poster_path ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path : ""} alt="" />
            {movie.title}
        </div>
    );
};

export default Movie;