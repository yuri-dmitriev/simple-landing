import { Component } from 'react';
import Button from '../components/button';

import './header.css';

const text = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Duis sed dapibus leo nec ornare 
diam sed commodo nibh ante facilisis bibendum.`;

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 intro">
                <h1>We are a Landing page</h1>
                <p>{text}</p>
                <Button
                  isLink={true}
                  className="btn btn-custom btn-lg button-custom"
                  href="/#features"
                  text="Learn more"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
