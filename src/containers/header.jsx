import { Component } from 'react';
import Logo from '../components/logo';

import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
      </header>
    );
  }
}

export default Header;
