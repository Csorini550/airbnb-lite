import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

const Dropdown = ({ setAuthenticated }) => {


  return (
    <>
      <div>
        <NavLink className="navtext profile-links" to="/login" exact={true} activeClassName="active">
          Login
          </NavLink>
      </div>
      <div>
        <NavLink className="navtext profile-links" to="/sign-up" exact={true} activeClassName="active">
          Sign Up
          </NavLink>
      </div>
      <div>
        <LogoutButton setAuthenticated={setAuthenticated} />
      </div>
    </>

  )

}


export default Dropdown;