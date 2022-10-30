import React,{FunctionComponent} from 'react';

const Movie:FunctionComponent<any> = ({movie, ...rootDOMAttributes}) => {
    return (
        <div className='movie' {...rootDOMAttributes}>
            <img src={movie.poster_path ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path : ""} alt="" />
            <h1>Title : {movie.title} <br /> <br /> Date : {movie.release_date} <br /> <br /> Note : {movie.vote_average}  <br /> <br /> adult : {movie.adult.toString()}</h1>
        </div>
    );
};

export default Movie;