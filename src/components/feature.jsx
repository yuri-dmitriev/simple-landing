const Feature = ({ icon, title, text }) => (
  <li>
    <div className="feature-circle">
      <i className={`fas ${icon}`} />
    </div>
    <div className="feature-title">{title}</div>
    <div className="feature-text">{text}</div>
  </li>
);

export default Feature;
