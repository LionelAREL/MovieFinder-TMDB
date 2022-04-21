import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';
import Movie from '../components/Movie';
import SearchBar from '../components/SearchBar';

const Search = () => {
    const [movies,setMovies] = React.useState([])
    React.useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7ca784ce7c3ed576b103a9591ded4609&page=1').then((res) => {
            console.log(res.data.results);
            setMovies(res.data.results);
        });
    },[]);
    return (
        <div className='main'>
        <header>
            <Header/>
        </header>
        <section>
            <div className="container">
                <SearchBar/>
                <div className='movieContainer'>
                    {movies.slice(0,18).map((movie) => <Movie key={movie.id} movie={movie}/>)}
                </div>
            </div>
        </section>
        <footer>
            <Footer/>
        </footer>
        </div>
    );
};

export default Search;