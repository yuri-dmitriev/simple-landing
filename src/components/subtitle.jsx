import './subtitle.css';

const Subtitle = ({ text, section }) => {
  let className = "subtitle";
  if (section) {
    className += ` ${section}-subtitle`;
  }
  return <h2 className={className}>{text}</h2>
};

export default Subtitle;
