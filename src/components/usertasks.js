import React from 'react';
import superagent from 'superagent';

export default class UserTasks extends React.Component {
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
      <section id='usertasks' className='usertasks-container'>
        <ul id='usertaskslist'>
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