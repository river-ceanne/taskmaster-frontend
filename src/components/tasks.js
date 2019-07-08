/* eslint-disable import/first */

import React from 'react';
import superagent from 'superagent';
import { request } from 'http';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  setTasks = async () => {
    let tasksData = await superagent.get(
      `${this.props.backend}`
    ) 
    .withCredentials()
    .catch(err => console.log('Error on get is: ', err));
    if (tasksData !== undefined) {
      this.setState({ tasks: tasksData.body });
      console.log('--- TASK DATA --- ' + tasksData);
    }

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

      <h2 id='tasksTitle'>Tasks</h2>
        <ul id='alltaskslist'>
          {
            this.state.tasks.map((val, i) => {
            // let publishedAt = new Date(val.publishedAt).toDateString();
            return (
              <>
                <li key={i}>
                <p>{val.title}</p> 
                  <div id='taskDiv'>
                    <p>Task Description: {val.description}</p>
                    <p>Assigned To: {val.assignee}</p>
                    <p>{val.status}</p>
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