import './feature.css';

const Feature = ({ icon, title, text }) => (
  <div className="col">
    <i className={`fas ${icon} feature-circle`} />
    <h3 className="feature-title">{title}</h3>
    <p className="feature-text">{text}</p>
  </div>
);

export default Feature;
