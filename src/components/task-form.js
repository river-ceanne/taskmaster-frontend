import React from 'react';

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      assignee: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    fetch(`${this.props.backend}/tasks`, {
      mode:'cors',
      method: 'POST',
      body: `title=${e.target.title.value}&description=${e.target.description.value}&assignee=${e.target.assignee.value}`
    })
    .then( data => {
      console.log(data);
      // window.location.href = '/'; 
    } )
    .catch( console.error );

  };

  render() {
    return (
      <form id="task-form" onSubmit={this.handleSubmit}>
      <h3>Create a New Task</h3>
        <p>Title: <input id="title" type="text" name="title" /></p>
        <p>Description: <input id="description=" type="text" name="description" /></p>
        <p>Assignee: <input id="assignee" type="text" name="assignee" /></p>

        <p><input type="submit" value="Create Task"/></p>
      </form>
    );
  }
}
