import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/goku.jpg';

const Header = () => {
  return (
    <nav className='header'>
      <span>Header</span>
      <div>
        <span>
          <Link to='/'>Main</Link>
        </span>
        <span>
          <Link to='/home'>Our Dishes</Link>
        </span>
        <span>
          <Link to='/booking'>Book Table</Link>
        </span>
      </div>
    </nav>
  );
};
export default Header;
