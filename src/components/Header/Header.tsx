import * as React from 'react';
import './Header.css';

interface Props {
  username: string;
  logout: () => void;
}

const Header = ({ logout }: Props) => (
  <nav className="header">
    <h3 className="header__title">welcome to TODO APP</h3>
    <button className="header__btn" onClick={logout}>
      logout
    </button>
  </nav>
);

export default Header;
