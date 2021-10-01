import { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
          <p>
            {`© 2018 Issaaf Kattan React Land Page Template. Design by `}
            <a href="http://www.templatewire.com/">TemplateWire</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
