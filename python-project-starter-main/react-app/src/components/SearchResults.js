import React, { useEffect, useState } from 'react';



const SearchResults = ({res}) => {
  console.log(res)
  const [venues, setVenues] = useState([res])

  // useEffect(() => {
  //   const venueSearch = async () => {
  //     const res = await fetch("/api/venues");
  //     const data = await res.json();
  //     setVenues(Object.values(data));
  //   };
  //   venueSearch();
  // }, []);

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