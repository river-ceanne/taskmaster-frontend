import React from 'react';
import superagent from 'superagent';

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: '',
    };
  }

  handleSearchKeyword = e => {
    let search_query = e.target.value;
    this.setState({ search_query });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // let query = this.state.search_query;

    // let result = await superagent
    //     .post(`${___API_URL____}/user`)
    //     .query({ username: this.state.user.name });

    // let weatherData = await superagent.get(`${process.env.BACKEND_URL}/weather`).query({data : locationData.body});
    // let yelpData = await superagent.get(`${__API_URL__}/yelp`).query({data : locationData.body});
;

  };

  render() {
    return (
      <form id="task-form" onSubmit={this.handleSubmit}>
        <p>Title: <input onChange={this.handleSearchKeyword} /></p>
        <p>Description: <input onChange={this.handleSearchKeyword} /></p>
        <p>Assignee: <input onChange={this.handleSearchKeyword} /></p>

        <p><input type="submit" value="Create Task"/></p>
      </form>
    );
  }
}
