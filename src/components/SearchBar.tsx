import React, {FunctionComponent} from 'react';
import FetchData from '../services/fetchData-service';
import searchIcon from './../assets/search.svg';
import DetailsSearch from './DetailsSearch';
import Details from './Details';

const SearchBar:FunctionComponent<any> = ({setDetails,setMovies,setIsDetails,setTotalPages,pageCount,isDetails,setPageCount}) => {
    const [adult,setAdult] = React.useState<string>("");
    const [years,setYears] = React.useState<string>("");
    const [search,setSearch] = React.useState<string>("");
    const [checks,setChecks] = React.useState<any[]>([]);

    React.useEffect(() => {
        if(!isDetails){
            console.log(pageCount,search,adult,years);
            FetchData.getMoviesDetails(search,pageCount,adult,years).then((res) => {
                console.log(res.results);
                setTotalPages(res.total_pages);
                if(checks.length == 0){
                    setMovies(res.results);
                }
                else{
                    setMovies(res.results.filter((m:any) => checks.some((e) => m.genre_ids.map((e:any) => e.toString()).includes(e)) ));
                }
            });
        }
    },[pageCount,adult,years,search,checks]);
    
    function searchClick(e:any){
        console.log("click")
        e.preventDefault();
        setIsDetails(false);
        setPageCount(0);
        if(document.getElementById('adults')){
            let temp:any = document.getElementById('adults');
            setAdult(temp?.value);
        }
        if(document.getElementById("years")){
            let temp:any = document.getElementById('years');
            setYears(temp.value);
        }
        if(document.getElementById("search") != null){
            let temp:any = document.getElementById('search');
            setSearch(temp.value);
        }
        if(document.getElementsByClassName("inputCheckbox") != null){
            setChecks(Array.from(document.getElementsByClassName("inputCheckbox")).filter((e:any) => e.checked === true).map((e:any) => e.value));
        }
    }
    return (
        <div>
            <form action="">
                <label>
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