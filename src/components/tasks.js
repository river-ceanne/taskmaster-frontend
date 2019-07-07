import React from 'react';
import superagent from 'superagent';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  setTasks = async event => {
    let tasksData = await superagent.get(
      `${process.env.BACKEND_URL}`
    );
    this.setState({ tasks: tasksData.body });
  };

  componentDidMount() {
    this.setTasks();
  }

  render() {
    return (
      <section id='alltasks' className='alltasks-container'>
        <ul id='alltaskslist'>
          <h2>Tasks</h2>
          {this.state.tasks.map((val, idx) => {
            // let publishedAt = new Date(val.publishedAt).toDateString();
            return (
              <>
                <li key={idx}>
                <p>{val.title}</p>
                  {/* <p>{publishedAt}</p> */}
                  <div id='taskDiv'>
                    <p>Task Description: {val.description}</p>
                    <p>Assigned To: {val.assignee}</p>
                    <p>{val.status}</p>
                  </div>
                </li>
                <hr />
              </>
            );
          })}
        </ul>
      </section>
    );
  }
}