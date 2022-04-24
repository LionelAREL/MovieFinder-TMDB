import React from 'react';

const Detail = ({setDetails}) => {
    function click(query){
        setDetails(query);
    }
    return (
        <div className='containerButton'>
            <button className='buttonDetails' onClick = {() => click("upcoming")}>upcoming</button>
            <button className='buttonDetails' onClick = {() => click("top_rated")}>top rated</button>
            <button className='buttonDetails' onClick = {() => click("popular")}>popular</button>
        </div>
    );
};

export default Detail;