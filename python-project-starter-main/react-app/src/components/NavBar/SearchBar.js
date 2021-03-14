import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { search } from '../../store/search';
import './NavBar.css'

const SearchBar = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    // let res = await fetch('/api/results/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     location: location,
    //     date: date,
    //     time: time,
    //     guest_count: guestCount
    //   })
    // });
    // let data = await res.json()
    // // // console.log(data, 'resultssssss')
    // // history.push('/results', {params})
    // console.log(location, date, time)



    //   if (searchTerm) {
    //   return dispatch(search({searchTerm}), setSearchTerm(''), history.push('/results') )
    // }
    if (location) {
      return dispatch(search({ location, setStartDate, setEndDate, guestCount }), history.push('/results'))
    }


  }

  return (
    <div id="search-container" className="search-modal">
      <form onSubmit={handleSubmit}>
        <div id="search-rows">
          <div className="search">
            <div className="search-text">Location</div>
            <input
              type="text"
              value={location}
              placeholder="Where are you?"
              onChange={(e) => setLocation(e.target.value)}
              onFocus={(e) => e.target.style.backgroundColor = "white"}
            ></input>
          </div>
          <div className="search">
            <div className="search-text">Start Date</div>
            <input
              type="date"
              value={startDate}
              placeholder="Add date"
              onChange={(e) => setStartDate(e.target.value)}
            ></input>
          </div>
          <div className="search">
            <div className="search-text">End Date</div>
            <input
              type="date"
              value={endDate}
              placeholder="Add date"
              onChange={(e) => setEndDate(e.target.value)}
            ></input>
          </div>
          <div className="search" id="guests">
            <div className="search-text">Guests</div>
            <input
              type="number"
              value={guestCount}
              placeholder="Add guests"
              onChange={(e) => setGuestCount(e.target.value)}
            ></input>


          </div>
          <div className="search" id="submit">
            {/* <input type='submit' value='submit' id='baby-submit' /> */}
            <div id="search-bar-submit" className="btns">
              <button type="submit" id="search-button" onClick={handleSubmit} id="submit-btn" value="submit">Submit</button>
            </div>

          </div>


        </div>
        {/* </div> */}
      </form>
    </div>
  )
}


export default SearchBar;