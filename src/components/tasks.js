/* eslint-disable import/first */

import React from 'react';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  setTasks = () => {

    fetch(this.props.backend, {
      mode:'cors',
      method: 'GET'
    })
    .then( data => {
      console.log(data);
      return data.json();

    } )
    .then( taskData => {
      if (taskData !== undefined || taskData !== null) {
        return this.setState({ tasks: taskData });
      }
    } )
    .catch( console.error );

  };

  componentDidMount() {
    this.setTasks();
  };

  componentDidUpdate(prevProps) {
    if (this.props.tasks !== prevProps.tasks) {
      this.setTasks();
    }
  };

  render() {
    return (

      <section id='alltasks' className='alltasks-container'>

      <h3 id='tasksTitle'>All Tasks</h3>
        <ul id='alltaskslist'>
          {
            this.state.tasks.map(val => {
            return (
              <>
                <li key={val.id}>

                <p>{val.title}</p> 
                  <div id='taskDiv'>
                    <p>Task Description: {val.description}</p>
                    <p>Assigned To: {val.assignee}</p>
                    <p>Status: {val.status}</p>
                  </div>
                </li>
                <hr />
              </>
            );
          })//end of map
          }
        </ul>  


      </section>
    );
  }
}