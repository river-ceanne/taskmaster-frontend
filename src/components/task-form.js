import React from 'react';
import superagent from 'superagent';

class TaskForm extends React.Component {
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
    let query = this.state.search_query;

    let locationData = await superagent.get(`${}/location`).query({ data : query });
    let weatherData = await superagent.get(`${__API_URL__}/weather`).query({data : locationData.body});
    let yelpData = await superagent.get(`${__API_URL__}/yelp`).query({data : locationData.body});

    console.log(weatherData);

    let apiResults = {
      location: locationData.body,
      weather: weatherData.body,
      yelp: yelpData.body,
      events: eventsData.body,
      movies: moviesData.body
    }

    console.log('API RESULTS : ',apiResults);
    this.props.callback(apiResults);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleSearchKeyword} />
        <button onClick={this.handleSubmit}>Create Task</button>
      </form>
    );
  }
}

export default TaskForm;