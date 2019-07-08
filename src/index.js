
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/core.scss';
import App from './components/App.js';

class ReactMain extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<ReactMain />, document.getElementById('root'));
