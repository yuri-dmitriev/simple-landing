import Subtitle from '../components/subtitle';
import Feature from '../components/feature';

import './features.css';

const FEATURES = [
  {
    id: 1,
    icon: 'fa-comments',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
  },
  {
    id: 2,
    icon: 'fa-bullhorn',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
  },
  {
    id: 3,
    icon: 'fa-users',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
  },
  {
    id: 4,
    icon: 'fa-magic',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
  },
];

const Features = () => (
  <div id="features" className="features text-center">
    <div className="container">
      <Subtitle text="Features" />
      <ul className="features-list">
        {FEATURES.map(({ id, icon, title, text }) => (
          <Feature id={id} icon={icon} title={title} text={text} />
        ))}
      </ul>
    </div>
  </div>
);

export default Features;
