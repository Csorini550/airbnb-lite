import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {noSearch} from '../store/search';
import Map from './Map';


const SearchResults = () => {
  const dispatch = useDispatch();

  let venues = useSelector(state => {
    return Object.values(state.search)
    });

  // IF THERE'S NO VENUES IN THE STORE (SOMEONE DIDN'T SEARCH FOR A VENUE) THEN THIS GRABS ALL VENUES AND DISPLAYS THEM
  // SO THAT THE PAGE WILL NOT BE BLANK
  if(venues.length<1){
    venues = dispatch(noSearch())
    return venues = Object.values(venues)
  }  
  
  return (
    <>
      <h2 id="results">Event spaces near you</h2>
      <div>
        {console.log(venues, 'thisss')}
        {venues.map(venue => {
          return (
            <Link to={`/reservations/${venue.id}`} key={venue.id}>
              <h1>{venue.name}</h1>
            </Link>
          );
        })}
      </div>
      <Map />
    </>
  )
}

export default SearchResults;