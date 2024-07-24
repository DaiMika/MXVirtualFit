import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

/**
 * Header component for navigation.
 * Contains links to different parts of the application.
 */
function Header() {
  return (
    <header className="Header">
      <h1>MXVirtualFit</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-workout">Add Workout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
