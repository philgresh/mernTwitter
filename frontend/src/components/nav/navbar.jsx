/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearSessionErrors } from '../../actions/session_actions';

const Navbar = ({ loggedIn, logout }) => {
  const dispatch = useDispatch();
  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const handleAlt = () => {
    dispatch(clearSessionErrors());
  };
  const Links = () => {
    return (
      <>
        {loggedIn ? (
          <nav>
            <div className="nav-left">
              <NavLink to="/tweets">Tweets</NavLink>
              <NavLink to="/new_tweet">New Tweet</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </div>
            <button type="button" className="nav-right" onClick={logoutUser}>
              Logout
            </button>
          </nav>
        ) : (
          <nav>
            <NavLink to="/signup" onClick={handleAlt}>
              Sign Up
            </NavLink>
            <NavLink to="/login" onClick={handleAlt}>
              Log In
            </NavLink>
          </nav>
        )}
      </>
    );
  };

  return (
    <header>
      <Links />
    </header>
  );
};

export default Navbar;
