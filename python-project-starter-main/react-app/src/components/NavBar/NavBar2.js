import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.jpg'
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import "./NavBar.css"


const NavBar2 = ({ setAuthenticated }) => {
  const wrapperRef = useRef(null);
  const [searchBar, setSearchbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSearchbar(false);
    }
  }


  return (
    <>

      <nav id="navbar-after">
        <div className="navtext">
          <NavLink className="navtext" to="/" exact={true} activeClassName="active">
            <img id="logo" src={logo}></img>
          </NavLink>
        </div>
        <div className="navtext hover-shadow">
          <div className="navtext">Venues to Book</div>
        </div>
        <div className="navtext hover-shadow">
          <div className="navtext">Experiences</div>
        </div>
        <div className="navtext hover-shadow">
          <NavLink className="navtext" to="/create-venue/" exact={true} activeClassName="active">
            <div className="navtext">Online Experiences</div>
          </NavLink>
        </div>
        <div className="navtext hover-shadow">
          <div className="navtext">Become a host</div>
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
      <div onClick={() => setSearchbar(!searchBar)} id="white-space">


        <div>
          <SearchBar setAuthenticated={setAuthenticated} />
        </div>
      </div>
    </>

  )
}
// </>
// );
// }

export default NavBar2;
