import React from 'react';
//import './Navbar.css'; // For component-specific CSS if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Potluck</div>
      <ul className="nav-links">
        <li><a href="#">Homepage</a></li>
        <li><a href="#">Leaderboard</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Submit</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
