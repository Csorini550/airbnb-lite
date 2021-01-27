import React, { useEffect, useState } from 'react';


const SearchResults = () => {

  const [venues, setVenues] = useState([])

  useEffect(() => {
    const venueSearch = async () => {
      const res = await fetch("/api/venues");
      const data = await res.json();
      console.log(data)
      console.log(data[venues])
      console.log("I HIT THIS")
      setVenues(data);
    };
    venueSearch();
  }, []);

  return (
    <div>
      {venues[0]}
      {/* {venues.map(venue => {
        return (
          <div key={venue.id}>
            <h1>{venue.name}</h1>


          </div>
        );
      })} */}
    </div>
  )
}

export default SearchResults;