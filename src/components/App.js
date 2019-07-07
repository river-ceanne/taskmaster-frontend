import React from 'react';
require('dotenv').config();
import Nav from './nav.js';
import Main from './main.js';


class App extends React.Component {

  render() {
    return (
      <React.Fragment>
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
