import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogout } from '../../../api/users';
import authActions from '../../../state/actions/authentication';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    fetchLogout()
      .then(() => {
        localStorage.clear();
        dispatch(authActions.toggleAuth());
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
