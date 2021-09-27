import { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          {`© 2018 Issaaf Kattan React Land Page Template. Design by `}
          <a href="http://www.templatewire.com/">TemplateWire</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
