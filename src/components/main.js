import React from 'react';
import Tasks from './tasks.js';


export default class Main extends React.Component {
  render() {
    return (
      <>
        <div id='main'>
          <Tasks backend={this.props.backend}/>
        </div>
      </>
    );
  }
}