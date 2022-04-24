import React from 'react';
import search from "./../assets/search.svg";
import Select from 'react-select'
import Details from './Details';
import DetailsSearch from './DetailsSearch';
import axios from 'axios';


const SearchBar = ({setDetails,setMovies}) => {
    // const items = []
    // for(var i = 1950;i <  2023;i++){
    //     items.push(<input value={i.toString()} key={i} type="checkbox" />);
    // }
    
    function searchClick(e){
        e.preventDefault();
        let adults = "";
        let years = "";
        let search = "";
        if(document.getElementById('adults')){
            adults = document.getElementById('adults').value;
        }
        if(document.getElementById("years") != null){
            years = document.getElementById("years").value;
        }
        if(document.getElementById("search") != null){
            search = document.getElementById("search").value;
        }
        console.log(adults,years,search);
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=7ca784ce7c3ed576b103a9591ded4609&language=en-US&query=' + search +'&page=1&include_adult=' + adults + (years ? '&year=' + years:'')).then((res) => {
            console.log(res.data.results);
            setMovies(res.data.results);
        });
    }
    return (
        <div>
            <form action="">
                <label htmlFor="input">
                    <div className="input-wrapper">
                        <input id="search" type="text" />
                        <button className="searchButton" onClick={(e) => searchClick(e)}>Search</button>
                        <img className='searchIcon' src={search} alt="" />
                    </div>
                </label>
            </form>
            <div className="containerDetails">
                <Details setDetails={setDetails}/>
                <DetailsSearch/>
            </div>
        </div>
    );
};

export default SearchBar;