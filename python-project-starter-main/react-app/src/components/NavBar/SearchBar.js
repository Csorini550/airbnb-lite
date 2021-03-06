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
            <div>Location</div>
            <input
              type="text"
              value={location}
              placeholder="Where are you?"
              onChange={(e) => setLocation(e.target.value)}
              onFocus={(e) => e.target.style.backgroundColor = "white"}
            ></input>
          </div>
          <div className="search">
            <div>Start Date</div>
            <input
              type="date"
              value={startDate}
              placeholder="Add date"
              onChange={(e) => setStartDate(e.target.value)}
            ></input>
          </div>
          <div className="search">
            <div>End Date</div>
            <input
              type="date"
              value={endDate}
              placeholder="Add date"
              onChange={(e) => setEndDate(e.target.value)}
            ></input>
          </div>
          <div className="search" id="guests">
            <div>Guests</div>
            <input
              type="number"
              value={guestCount}
              placeholder="Add guests"
              onChange={(e) => setGuestCount(e.target.value)}
            ></input>


          </div>
          <div className="search" id="submit">
            <input type='submit' value='submit' id='baby-submit' />
            {/* <div id="search-icon"> */}
            {/* <img onClick={handleSubmit} id="search-icon" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTc0LjUzMzMzLDE3LjJjLTMxLjU5NjQyLDAgLTU3LjMzMzMzLDI1LjczNjkyIC01Ny4zMzMzMyw1Ny4zMzMzM2MwLDMxLjU5NjQyIDI1LjczNjkyLDU3LjMzMzMzIDU3LjMzMzMzLDU3LjMzMzMzYzEzLjczOTk4LDAgMjYuMzU4MzQsLTQuODc5MTUgMzYuMjQ3NjYsLTEyLjk3ODM5bDM0LjIzMjAzLDM0LjIzMjAzYzEuNDM4MDIsMS40OTc3OCAzLjU3MzQsMi4xMDExMyA1LjU4MjYsMS41NzczNWMyLjAwOTIsLTAuNTIzNzggMy41NzgyNiwtMi4wOTI4NCA0LjEwMjA0LC00LjEwMjA0YzAuNTIzNzgsLTIuMDA5MiAtMC4wNzk1NywtNC4xNDQ1OCAtMS41NzczNSwtNS41ODI2bC0zNC4yMzIwMywtMzQuMjMyMDNjOC4wOTkyNCwtOS44ODkzMiAxMi45NzgzOSwtMjIuNTA3NjggMTIuOTc4MzksLTM2LjI0NzY2YzAsLTMxLjU5NjQyIC0yNS43MzY5MiwtNTcuMzMzMzMgLTU3LjMzMzMzLC01Ny4zMzMzM3pNNzQuNTMzMzMsMjguNjY2NjdjMjUuMzk5MzcsMCA0NS44NjY2NywyMC40NjczIDQ1Ljg2NjY3LDQ1Ljg2NjY3YzAsMjUuMzk5MzcgLTIwLjQ2NzI5LDQ1Ljg2NjY3IC00NS44NjY2Nyw0NS44NjY2N2MtMjUuMzk5MzcsMCAtNDUuODY2NjcsLTIwLjQ2NzI5IC00NS44NjY2NywtNDUuODY2NjdjMCwtMjUuMzk5MzcgMjAuNDY3MywtNDUuODY2NjcgNDUuODY2NjcsLTQ1Ljg2NjY3eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" /> */}
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