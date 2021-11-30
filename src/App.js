import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    user: ''
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/jmerz826`)
      .then(res => {
        this.setState({
          ...this.state,
          avatar: res.data.avatar_url,
          name: res.data.name,
          username: res.data.login,
          repos: res.data.public_repos,
          followerCount: res.data.followers,
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      user:e.target.value
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          user: '',
          username: res.data.login,
          name: res.data.name,
          repos: res.data.public_repos,
          followerCount: res.data.followers,
          avatar: res.data.avatar_url
        })
      })
      .catch(err => console.error(err))
    ;
  }

  render() {
    return (
      <div>
        <h1>Github Info</h1>
        <form>
          <input
            type='text'
            placeholder='GitHub Handle'
            value={this.state.user}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSearch}>Search</button>
        </form>
        <div id='user-card'>
          <img src={this.state.avatar} />
          <h2>{this.state.name}</h2>
          <h3>{this.state.username}</h3>
          <h3>Total Repos: {this.state.repos}</h3>
          <h3>Total Followers: { this.state.followerCount}</h3>
        </div>
      </div>
    );
  }
}

export default App;
