import React from 'react';
import fire from "./../assets/fire.svg";
import upcoming from "./../assets/upcoming.svg";
import topRated from "./../assets/top_rated.svg";

const Detail = ({setDetails}) => {
    function click(query){
        setDetails(query);
    }
    return (
        <div className='containerButton'>
            <div className="buttonDetails">
                <img src={fire} alt="" />
                <button  onClick = {() => click("upcoming")}>upcoming</button>
            </div>
            <div className="buttonDetails">
                <img src={upcoming} alt="" />
                <button  onClick = {() => click("top_rated")}>top rated</button>
            </div>
            <div className="buttonDetails">
                <img src={topRated} alt="" />
                <button  onClick = {() => click("popular")}>popular</button>
            </div>
        </div>
    );
};

export default Detail;