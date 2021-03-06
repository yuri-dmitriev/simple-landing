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
      <Subtitle text="Features" section="features"/>
      <div className="row features-list">
        {FEATURES.map(({ id, icon, title, text }) => (
          <Feature key={id} icon={icon} title={title} text={text} />
        ))}
      </div>
    </div>
  </div>
);

export default Features;
