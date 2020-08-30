import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ loggedIn, logout }) => {
  const logoutUser = (e) => {
    e.preventDefault();
    logout();
  };

  // Selectively render links dependent on whether the user is logged in
  const getLinks = () => {
    if (loggedIn) {
      return (
        <div>
          <Link to="tweets">All Tweets</Link>
          <Link to="profile">Profile</Link>
          <Link to="new_tweet">Write a Tweet</Link>
          <button onClick={logoutUser} type="button">
            Logout
          </button>
        </div>
      );
    }
    return (
      <div>
        <Link to="signup">Signup</Link>
        <Link to="login">Login</Link>
      </div>
    );
  };

  return (
    <div>
      <h1>Chirper</h1>
      {getLinks()}
    </div>
  );
};

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Navbar;
