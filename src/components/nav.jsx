import { Component } from 'react';
import NavLogo from './nav__logo';

import './nav.css';

const LINKS = [
  {
    id: 'features',
    text: 'Features',
  },
  {
    id: 'about',
    text: 'About',
  },
  {
    id: 'services',
    text: 'Services',
  },
  {
    id: 'portfolio',
    text: 'Gallery',
  },
  {
    id: 'testimonials',
    text: 'Testimonials',
  },
  {
    id: 'team',
    text: 'Team',
  },
  {
    id: 'contact',
    text: 'Contact',
  },
];

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLogo />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          {LINKS.map(({ id, text }) => (
            <li key={id} className="nav-item">
              <a className="nav-link" href={`/#${id}`}>{text}</a>
            </li>
          ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
