import React from 'react';
import './NavBar.css'

const SearchBar = () => {
  return (
    <div id="search-container">
      {/* <form> */}
      <div id="search-rows">
        <div className="search">
          <div>Location</div>
          <input type="text"></input>
        </div>
        <div className="search">
          <div>Date</div>
          <input type="date"></input>
        </div>
        <div className="search">
          <div>Time</div>
          <input type="time"></input>
        </div>
        <div className="search">
          <div>Guests</div>
          <input type="number"></input>
        </div>
        <div className="search">
          <button>Search</button>
        </div>
      </div>
      {/* </form> */}
    </div>
  )
}


export default SearchBar;