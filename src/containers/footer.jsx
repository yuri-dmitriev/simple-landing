import { Component } from 'react';
import './footer.css';
import '../components/link'
import Link from "../components/link";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
          <p>
            {`© 2018 Issaaf Kattan React Land Page Template. Design by `}
            <Link href="http://www.templatewire.com/" text="TemplateWire" />
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
