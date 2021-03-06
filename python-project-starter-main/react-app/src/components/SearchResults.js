import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { noSearch } from '../store/search';
import { stateSearch } from '../store/search'
import { getMedia } from "../store/media"
import Map from './Map';
import './SearchResults.css'


const SearchResults = () => {
  const dispatch = useDispatch();

  let venues = useSelector(state => {
    return Object.values(state.search)
  });

  const searchByState = (state) => {
    let searchTerm = state
    return dispatch(stateSearch(searchTerm))
  }

  //help
  //allows us to key inot media to get the url
  // we will change all venue.links to media.links
  let media = useSelector(state => {
    return state.media
  })

  //help
  // IF THERE'S NO VENUES IN THE STORE (SOMEONE DIDN'T SEARCH FOR A VENUE) THEN THIS GRABS ALL VENUES AND DISPLAYS THEM
  // SO THAT THE PAGE WILL NOT BE BLANK
  if (venues.length < 1) {

    return (
      <>
        <div className="event-container">
          <h2 id="results">Sorry, there are no matching events for the searched criteria.</h2>
          <h4 className='no-events-heading'> Create an event or check out popular events near you. </h4>
          <div className='no-search-results-div'>
            <button>
              <Link to={`/create-venue`} key='event' className='link'>Create An Event</Link>
            </button>
            <button>
              <Link onClick={() => searchByState('Illinois')} className="state-link" to="/results" >Popular Events</Link>
            </button>
          </div>
        </div>
      </>
    )
    // venues = dispatch(noSearch())
    // return venues = Object.values(venues)
  }

  //help
  // if we get the state working we need to {venue.links} to {media.url}
  // might need if we get that weird error but currently breaks code
  // if (Object.keys(media).length === 0) return null;
  return (
    <div className="event-container">
      <div>

      </div>
      <div id="map-container">
        {/* <Map /> */}
      </div>
      <h2 id="results">Event spaces near you</h2>
      <div>
        {venues.map(venue => {
          return (
            <>

              <div className='individualVenue'>
                <Link to={`/reservations/${venue.id}`} key={venue.id} className='link'>
                  <div className='title'>
                    <p>{venue.name}</p>
                  </div>
                  <div className='summary'>
                    <p>{venue.summary}</p>
                  </div>
                  <div className='smallBorder'></div>
                  <div className='summary'>
                    <p>Total Occupancy: {venue.total_occupancy}</p>
                  </div>
                  <p className='price'>Price: ${venue.price}/ night</p>
                </Link>
                <div id="forceImgUp">
                  <img className="results-pic" src={venue.links} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  )
}

export default SearchResults;