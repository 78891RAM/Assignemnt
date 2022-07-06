import React from 'react';
import "../Css/search.css";

const Search= () =>{
    return (
        <>
        <div className="Search-container">
            <div className="searchbars">
                <input type="text" className="one">

                </input>
                <input type="text" className="two">
                    
                </input>
                <input type="text" className="three">
                    
                </input>

            </div>
            <div className="search-button">
                <button>Search</button>
            </div>
            
        </div>
        </>
    )
}
export default Search;