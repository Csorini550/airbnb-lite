import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import "./NavBar.css"

import logo from "./logo.jpg"


const NavBar = ({ setAuthenticated }) => {
  const [searchBar, setSearchbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {searchBar === false &&
        <nav id="navbar">
          <div className="navtext">
            <NavLink className="navtext" to="/" exact={true} activeClassName="active">
              <img id="logo" src={logo}></img>
            </NavLink>
          </div>
          <div id="navbar-search-container">
            <button id="search-bar-button" onClick={() => setSearchbar(!searchBar)}>
              <div>Start your search</div>
              <div id="red-circle">
                <div id="search-icon">
                  <img id="search-icon" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTc0LjUzMzMzLDE3LjJjLTMxLjU5NjQyLDAgLTU3LjMzMzMzLDI1LjczNjkyIC01Ny4zMzMzMyw1Ny4zMzMzM2MwLDMxLjU5NjQyIDI1LjczNjkyLDU3LjMzMzMzIDU3LjMzMzMzLDU3LjMzMzMzYzEzLjczOTk4LDAgMjYuMzU4MzQsLTQuODc5MTUgMzYuMjQ3NjYsLTEyLjk3ODM5bDM0LjIzMjAzLDM0LjIzMjAzYzEuNDM4MDIsMS40OTc3OCAzLjU3MzQsMi4xMDExMyA1LjU4MjYsMS41NzczNWMyLjAwOTIsLTAuNTIzNzggMy41NzgyNiwtMi4wOTI4NCA0LjEwMjA0LC00LjEwMjA0YzAuNTIzNzgsLTIuMDA5MiAtMC4wNzk1NywtNC4xNDQ1OCAtMS41NzczNSwtNS41ODI2bC0zNC4yMzIwMywtMzQuMjMyMDNjOC4wOTkyNCwtOS44ODkzMiAxMi45NzgzOSwtMjIuNTA3NjggMTIuOTc4MzksLTM2LjI0NzY2YzAsLTMxLjU5NjQyIC0yNS43MzY5MiwtNTcuMzMzMzMgLTU3LjMzMzMzLC01Ny4zMzMzM3pNNzQuNTMzMzMsMjguNjY2NjdjMjUuMzk5MzcsMCA0NS44NjY2NywyMC40NjczIDQ1Ljg2NjY3LDQ1Ljg2NjY3YzAsMjUuMzk5MzcgLTIwLjQ2NzI5LDQ1Ljg2NjY3IC00NS44NjY2Nyw0NS44NjY2N2MtMjUuMzk5MzcsMCAtNDUuODY2NjcsLTIwLjQ2NzI5IC00NS44NjY2NywtNDUuODY2NjdjMCwtMjUuMzk5MzcgMjAuNDY3MywtNDUuODY2NjcgNDUuODY2NjcsLTQ1Ljg2NjY3eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" />
                </div>
              </div>
            </button>
            <div>
              {searchBar ? <SearchBar setAuthenticated={setAuthenticated} /> : null}
            </div>
          </div>
          <div className="navtext hover-shadow">
            <NavLink className="navtext" to="/media" exact={true} activeClassName="active">
              Become a host
            </NavLink>
          </div>
          <div className="user-dropdown">
            <button id="profile-button" onClick={() => setDropdown(!dropdown)}>
              <div id="profile-icon-container">
                <img id="profile" src="https://img.icons8.com/ios-glyphs/30/000000/menu.png" />
                <img id="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAC+UlEQVRIie2Wv2sVWRTHP+fOZC2eQoisRA3xVyHCbpXCWgsLA5oIwcI0yZsZn/vAtdptxB+lNgpCmDcTbPzRiYkoFv4FCukUhGDwtxYWiyJh1333bJF5MvPezLyXsIiF32bmnl/fOfeeO+fAD3wjSK+GQRAMi8hhYFRVtwNDieq1iDxX1buu687PzMy8+l+Ia7XaVmvtGaAKOF3MLXDLGPNHGIbP10wcBMEYcA1Y3+0D2/BJVSfjOL5TZFCYge/7v4vIVWDdKkkB1onI0ZGRkb8WFhYe5hnkZpxkegswayBNw6rqeF7mHYE9zxtiZXuLSBdFZHR5eXm9tXZQRG6UEBsRuT49Pb2lXeF2WBpznuIz/SIio41GYzFZfwYmPc+7aoy5D/yU47PBdd3zgJ8WZrY6CIJhYImCs1fV+TiOx/J0vu/PJdctD01r7fbZ2dnXLUFmOxPHwoIzxiwW6YCnJTrHGJP5qAyxqh4scUZVNxbpRGRTF99M7PYC2lnmDPStUYeI7Coj3tzFecvExETHUSSyrWW+QKayV3VPVXV/f39/R3ENDAyMA/tWE6ud+F03BxG5WK/Xv551vV7fqKoXeuB6W0a81EOAnc1m89fWInnvVhuo6rMy4ns9EL+w1j5uLZL3XlphJnaG2HXdeaCZ4/QPcBMYr1Qqe6Io+tBSRFH0oVKp7FbVI4nNlxz/f1U187/uaBK+78+KSDUlequqB+I4ftItJYBarfaLtfYBMJgSR1EUHU/bdVS14zhngU+ttaqe6JUUIAzDx8CJlOgjcK7droM4DMM3qjrJyjSBMWZbr6QpDCdPKyKTURR13JbCCSQIgpPAJVZa221VPRVF0csytmq1us1xnMvAWEJ6qtFoXMmzLR19fN8/JCLXgQ3A38Ccqs65rvuo2Wy+B3AcZ9Bau1dVx4HDrLTGj6p6LI7ju0Wxuw57U1NTP/f19Z0GfiOnf7fBAjeAP/O2d1XELXieN5S0tlFgB6nxVlWXgHuqeifdc3/gu8B/DaADQCx7qmIAAAAASUVORK5CYII="></img>
              </div>
            </button>
            <div>
              {dropdown ? <Dropdown setAuthenticated={setAuthenticated} /> : null}
            </div>
          </div>
        </nav>
      }
      {searchBar === true &&
        <>
          <nav id="navbar-after">
            <div className="navtext">
              <NavLink className="navtext" to="/" exact={true} activeClassName="active">
                <img id="logo" src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"></img>
              </NavLink>
            </div>
            <div>
              <div>Venues to Book</div>
            </div>
            <div>
              <div>Experiences</div>
            </div>
            <div>
              <div>Online Experiences</div>
            </div>
            <div className="navtext hover-shadow">
              <div>Become a host</div>
            </div>
            <div className="user-dropdown">
              <button id="profile-button" onClick={() => setDropdown(!dropdown)}>
                <div id="profile-icon-container">
                  <img id="profile" src="https://img.icons8.com/ios-glyphs/30/000000/menu.png" />
                  <img id="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAC+UlEQVRIie2Wv2sVWRTHP+fOZC2eQoisRA3xVyHCbpXCWgsLA5oIwcI0yZsZn/vAtdptxB+lNgpCmDcTbPzRiYkoFv4FCukUhGDwtxYWiyJh1333bJF5MvPezLyXsIiF32bmnl/fOfeeO+fAD3wjSK+GQRAMi8hhYFRVtwNDieq1iDxX1buu687PzMy8+l+Ia7XaVmvtGaAKOF3MLXDLGPNHGIbP10wcBMEYcA1Y3+0D2/BJVSfjOL5TZFCYge/7v4vIVWDdKkkB1onI0ZGRkb8WFhYe5hnkZpxkegswayBNw6rqeF7mHYE9zxtiZXuLSBdFZHR5eXm9tXZQRG6UEBsRuT49Pb2lXeF2WBpznuIz/SIio41GYzFZfwYmPc+7aoy5D/yU47PBdd3zgJ8WZrY6CIJhYImCs1fV+TiOx/J0vu/PJdctD01r7fbZ2dnXLUFmOxPHwoIzxiwW6YCnJTrHGJP5qAyxqh4scUZVNxbpRGRTF99M7PYC2lnmDPStUYeI7Coj3tzFecvExETHUSSyrWW+QKayV3VPVXV/f39/R3ENDAyMA/tWE6ud+F03BxG5WK/Xv551vV7fqKoXeuB6W0a81EOAnc1m89fWInnvVhuo6rMy4ns9EL+w1j5uLZL3XlphJnaG2HXdeaCZ4/QPcBMYr1Qqe6Io+tBSRFH0oVKp7FbVI4nNlxz/f1U187/uaBK+78+KSDUlequqB+I4ftItJYBarfaLtfYBMJgSR1EUHU/bdVS14zhngU+ttaqe6JUUIAzDx8CJlOgjcK7droM4DMM3qjrJyjSBMWZbr6QpDCdPKyKTURR13JbCCSQIgpPAJVZa221VPRVF0csytmq1us1xnMvAWEJ6qtFoXMmzLR19fN8/JCLXgQ3A38Ccqs65rvuo2Wy+B3AcZ9Bau1dVx4HDrLTGj6p6LI7ju0Wxuw57U1NTP/f19Z0GfiOnf7fBAjeAP/O2d1XELXieN5S0tlFgB6nxVlWXgHuqeifdc3/gu8B/DaADQCx7qmIAAAAASUVORK5CYII="></img>
                </div>
              </button>
              <div>
                {dropdown ? <Dropdown setAuthenticated={setAuthenticated} /> : null}
              </div>
            </div>
          </nav >
          <div id="white-space">

            <div>
              {searchBar ? <SearchBar setAuthenticated={setAuthenticated} /> : null}
            </div>
          </div>
        </>

      }
    </>
  );
}

export default NavBar;