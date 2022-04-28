import React from 'react';
import searchIcon from "./../assets/search.svg";
import Select from 'react-select'
import Details from './Details';
import DetailsSearch from './DetailsSearch';
import axios from 'axios';


const SearchBar = ({setDetails,setMovies,setIsDetails,setTotalPages,pageCount,isDetails,setPageCount}) => {
    const [adult,setAdult] = React.useState("");
    const [years,setYears] = React.useState("");
    const [search,setSearch] = React.useState("");
    const [checks,setChecks] = React.useState([]);

    React.useEffect(() => {
        if(!isDetails){
            console.log(pageCount,search,adult,years);
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=7ca784ce7c3ed576b103a9591ded4609&language=en-US&query=' + search +'&page='+ (pageCount+1).toString() +'&include_adult=' + adult + (years ? '&year=' + years:'')).then((res) => {
                console.log(res.data.results);
                setTotalPages(res.data.total_pages);
                if(checks.length == 0){
                    setMovies(res.data.results);
                }
                else{
                    setMovies(res.data.results.filter((m) => checks.some((e) => m.genre_ids.map((e) => e.toString()).includes(e)) ));
                }
            });
        }
    },[pageCount,adult,years,search,checks]);
    
    function searchClick(e){
        console.log("click")
        e.preventDefault();
        setIsDetails(false);
        setPageCount(0);
        if(document.getElementById('adults')){
            setAdult(document.getElementById('adults').value);
        }
        if(document.getElementById("years") != null){
            setYears(document.getElementById("years").value);
        }
        if(document.getElementById("search") != null){
            setSearch(document.getElementById("search").value);
        }
        if(document.getElementsByClassName("inputCheckbox") != null){
            setChecks(Array.from(document.getElementsByClassName("inputCheckbox")).filter((e) => e.checked === true).map((e) => e.value));
        }
    }
    return (
        <div>
            <form action="">
                <label htmlFor="input">
                    <div className="input-wrapper">
                        <input id="search" type="text" />
                        <button className="searchButton" onClick={(e) => searchClick(e)}>Search</button>
                        <img className='searchIcon' src={searchIcon} alt="" />
                    </div>
                </label>
            </form>
            <div className="containerDetails">

                <div className="detailsSearch">
                    <DetailsSearch/>
                </div>
                <div className="details">
                    <Details setDetails={setDetails} setIsDetails={setIsDetails} setPageCount={setPageCount}/>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;