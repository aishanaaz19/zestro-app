import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to="/" className="link">
          <h2>Zestro</h2>
        </Link>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="userAuth">
        <Link to="/login" className="userAuth">Login</Link>
      </div>
      <div className="userAuth">
        <Link to="/register" className="userAuth">Signup</Link>
      </div>
    </section>
  );
};

export default NavBar;
