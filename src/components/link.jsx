import './link.css';

const Link = ({ href, text }) => (
  <a className="link" href={href}>{text}</a>
);

export default Link;
