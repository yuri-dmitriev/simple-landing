import Subtitle from '../components/subtitle';

import './about.css';
import aboutImg from '../img/about.jpg';

const About = () => (
  <div className="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <img src={aboutImg} alt="About us" className="img-responsive" />
        </div>
        <div className="col-xs-12 col-md-6">
          <Subtitle text="About us" section="about" />
        </div>
      </div>
    </div>
  </div>
);

export default About;
