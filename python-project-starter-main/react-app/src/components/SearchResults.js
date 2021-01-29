import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from './Map';


const SearchResults = () => {
  const venues = useSelector(state => {
    return Object.values(state.search)
  });

  const state = useSelector(state => state)
  console.log(venues)
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
      <Map />
    </>
  )
}

export default SearchResults;