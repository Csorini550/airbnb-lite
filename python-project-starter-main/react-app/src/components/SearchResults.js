import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';


const SearchResults = () => {
  const venues = useSelector(state => {
    return Object.values(state.search)
    });
  console.log(venues.length, 'helpppp')
  // useEffect(() => {
  //   const venueSearch = async () => {
  //     const res = await fetch("/api/venues");
  //     const data = await res.json();
  //     setVenues(Object.values(data));
  //   };
  //   venueSearch();
  // }, []);
  // if (venues.length ===0){
  //   return (
  //     <h3>No products match the search</h3>
  //   )
  // }
  return (
    <>
      <h2 id="results">Event spaces near you</h2>
      <div className="filters">
        <form>
          <div className="filter-div">
            <button className="filter">21+</button>
          </div>
          <div className="filter-div">
            <button className="filter">Large Groups</button>

          </div>
          <div>
            <button className="filter">More filters</button>
          </div>
        </form>

      </div>
      <div>
        {console.log(venues, 'thisss')}
        {venues.map(venue => {
          return (
            <div key={venue.id}>
              <h1>{venue.name}</h1>


            </div>
          );
        })}
      </div>
    </>
  )
}

export default SearchResults;