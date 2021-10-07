import { Component } from 'react';
import Nav from '../components/nav';
import Header from './header';
import Features from './features';
import About from './about';
import Footer from './footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-content">
          <Nav />
          <Header />
          <Features />
          <About />
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
