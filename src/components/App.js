/* eslint-disable import/first */

import React from 'react';
require('dotenv').config();
import Nav from './nav.js';
import Main from './main.js';
import Header from './header.js';


class App extends React.Component {

  render() {
    return (
      <React.Fragment>

        <Header />
      <div>
        <Nav />
      </div>
      <div>
        <Main />
      </div>

      </React.Fragment>
    );
  }
}//end of <App>

export default App;
