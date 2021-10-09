import Subtitle from '../components/subtitle';

import './about.css';
import aboutImg from '../img/about.jpg';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const About = () => (
  <div className="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <img src={aboutImg} alt="About us" className="img-responsive" />
        </div>
        <div className="col-xs-12 col-md-6">
          <Subtitle text="About us" section="about" />
          <p>{text}</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
