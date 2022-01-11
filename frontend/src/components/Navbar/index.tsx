import React from 'react';
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function NavBar() {
  return (
    <header>
    <nav className="container">
      <div className="dsmovie-nav-content">
        <h1>DSmovie</h1>
        <a href="https://github.com/josineidess">
        <div className="dsmovie-contact-container">
            <GithubIcon />
            <p className="dsmovie-contact-link">/josineidess</p>
        </div>
        </a>
      </div>
    </nav>
  </header>
  )
}

export default NavBar;