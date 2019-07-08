/* eslint-disable import/first */

import React from 'react';
require('dotenv').config();
import Nav from './nav.js';
import Main from './main.js';
import Header from './header.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'http://taskmaster-env.csiiybveap.us-east-1.elasticbeanstalk.com/'
    };
  }

  render() {
    return (
      <React.Fragment>

        <Header />
      <div>
        <Nav backend={this.state.backend}/>
      </div>


      </React.Fragment>
    );
  }
}//end of <App>

export default App;
