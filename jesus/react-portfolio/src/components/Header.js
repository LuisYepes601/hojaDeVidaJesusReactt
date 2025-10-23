import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="nombre-persona">
        <h4>Jesus<span>.</span></h4>
        <Link to="/" className="profile-icon"><i className="fa-solid fa-user"></i></Link>
      </div>
      <nav className="header-menu">
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'home' : ''}><span className="home"><i className="fa-solid fa-house"></i></span></Link></li>
          <li><Link to="/about" className="btn-sobre-mi">Sobre mi</Link></li>
          <li><Link to="/admin" className="btn-admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
