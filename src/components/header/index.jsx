import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

/**
 * Шапка страницы
 */
class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <a
          href="https://reactjs.org/"
          target="_blank"
          className="app-logo-wrapper"
        >
          <img
            src="./img/logo.svg"
            width="64"
            height="64"
            className="App-logo"
          />
          <h1 className="app-logo-title">React</h1>
        </a>
        <ul className="app-navbar">
          <li>
            <Link to="/" className="app-navbar__link">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/info" className="app-navbar__link">
              Информация
            </Link>
          </li>
          <li>
            <Link to="/weather" className="app-navbar__link">
              Погода
            </Link>
          </li>
        </ul>
        <div className="app-search">
          <input type="search" placeholder="Поиск" />
        </div>
      </header>
    );
  }
}
export default Header;
