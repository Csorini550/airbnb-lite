import React, { useEffect, useState } from 'react';



const SearchResults = () => {

  const [venues, setVenues] = useState([])

  useEffect(() => {
    const venueSearch = async () => {
      const res = await fetch("/api/venues");
      const data = await res.json();
      setVenues(data.venues);
    };
    venueSearch();
  }, []);

  return (
    <div id="results">
      {console.log(venues)}
      {venues.map(venue => {
        return (
          <div key={venue.id}>
            <h1>{venue}</h1>


          </div>
        );
      })}
    </div>
  )
}

export default SearchResults;