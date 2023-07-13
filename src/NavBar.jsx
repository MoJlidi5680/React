import logo from './logo.svg';
import './App.css';
import React from 'react';
import portfolio from "./portfolio.png"

function NavBar() {
  return (
    <div className='navbar'>
    <nav>
        <img src={portfolio} alt="" srcset="" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">service</a></li>
        <li><a href="#">work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    </div>
  );
}

export default NavBar;
