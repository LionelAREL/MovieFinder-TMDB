import React from 'react';
import search from "./../assets/search.svg";
import Select from 'react-select'

const SearchBar = () => {
    // const items = []
    // for(var i = 1950;i <  2023;i++){
    //     items.push(<input value={i.toString()} key={i} type="checkbox" />);
    // }
    return (
        <div>
            <form action="">
                <label htmlFor="input">
                    <div className="input-wrapper">
                        <input type="text" />
                        <button className="searchButton">Search</button>
                        <img className='searchIcon' src={search} alt="" />
                    </div>
                </label>
            </form>
        </div>
    );
};

export default SearchBar;