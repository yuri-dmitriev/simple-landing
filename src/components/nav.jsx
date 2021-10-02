import { Component } from 'react';
import NavLogo from './nav_logo';
import NavLink from './nav_link';

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
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <NavLogo />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center">
          {LINKS.map(({ id, text }) => (
            <NavLink key={id} id={id} text={text} />
          ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
