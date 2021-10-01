import { Component } from 'react';
import NavLogo from '../components/nav_logo';

import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <NavLogo />
            </div>
            <div className="col"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
