import { Component, Fragment } from 'react';
import Header from '../components/header/header';
import Main from '../components/main/main';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
