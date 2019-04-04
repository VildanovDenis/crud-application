import React from "react";

import "./index.css";

/**
 * Футер страницы
 */
class Footer extends React.Component {
  render() {
    return (
      <footer className="app-footer">
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="app-logo-wrapper"
        >
          <img
            src="./img/logo.svg"
            width="64"
            height="64"
            className="App-logo"
            alt="logo"
          />
          <h1 className="app-logo-title">React</h1>
        </a>
        <div className="autor">
          <h2 className="footer-title">Crud app</h2>
          <p>Автор: Денис Вильданов</p>
          <a
            href="https://github.com/VildanovDenis?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    );
  }
}
export default Footer;
