import './nav_link.css';

const NavLink = ({ id, text }) => (
  <li className="nav-item">
    <a className="nav-link nav_link" href={`/#${id}`}>{text}</a>
  </li>
);

export default NavLink;
