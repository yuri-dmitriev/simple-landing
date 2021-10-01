import { Component } from 'react';
import Header from '../components/header/header';
import Main from '../components/main/main';
import Footer from './footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-content">
          <Header />
          <Main />
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;