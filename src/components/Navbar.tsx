import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '@/styles/Navbar.css'

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className='navbar'>
      <Link className={ location.pathname === '/tg-mini-app/' ? 'navbar__link-active' : '' } to="/tg-mini-app/">Чат</Link>
      <Link className={ location.pathname === '/tg-mini-app/exchange' ? 'navbar__link-active' : '' } to="/tg-mini-app/exchange">Курс</Link>
      <Link className={ location.pathname === '/tg-mini-app/feed' ? 'navbar__link-active' : '' } to="/tg-mini-app/feed">Лента</Link>
    </nav>
  );
};

export default Navbar;