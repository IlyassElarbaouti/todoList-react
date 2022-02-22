import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogout } from '../../../api/users';
import './Header.css';

const Header = () => {

  const handleLogout = () => {
    fetchLogout()
      .then(() => {
        localStorage.clear();
        window.location.reload();
      })
      .catch((error) => {
        console.error('logout', error);
      });
  };
  return (
    <nav className="header">
      <h3 className="header__title">welcome to TODO APP</h3>
      <button className="header__btn" onClick={handleLogout}>
        logout
      </button>
    </nav>
  );
};

export default Header;
