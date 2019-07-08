import React from 'react';
import Main from './main.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import TaskForm from './task-form.js';
import UserTasks from './usertasks.js';

export default class Nav extends React.Component {
  
  render() {
    let navArr = [];

    navArr.push(
      <li key={1}>
        <a href={'/'}>Home</a>
      </li>
    );
    
      navArr.push(
        <li key={2}>
          <a href={'/addtask'}>Create New Task</a>
        </li>
      );
    
    navArr.push(
      <li key={3}>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleSearchKeyword} />
        <input type="submit" value="Search Task of User"/>
        </form>
      </li>
    );


    return (
      <React.Fragment>
        <Router>
          <div>
            <ul id='nav'>{navArr}</ul>
            <Route exact path='/' render={props => <Main backend={this.props.backend}/>}/>
            <Route path='/addtask' render={props => <TaskForm backend={this.props.backend}/>} />
            <Route
              path='/user'
              render={props => <UserTasks parentState={this.props.parentState} />}
            />
            
          </div>
        </Router>
      </React.Fragment>
    );
  } //end of render
} //end of class