import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowersList from './components/FollowerList';
import styled from 'styled-components';

const StyledApp = styled.div`
  h1{
    font-size: 5rem;
    margin-bottom:0;
    text-transform: uppercase;
  }

  form{
    font-size: 2rem;
    margin-bottom:2%;
    display:flex;
  }

  input{
    background-color:black;
    color:white;
    font-size:inherit;
    font-family: inherit;
    padding:1%;
    border:none;
    width:60%;
    margin-right: 0.5%;
  }

  button{
    font-size:inherit;
    font-family:inherit;
    padding:1%;
    background-color:lightgray;
    color:white;
    border:none;
  }

  button:hover{
    cursor: pointer;
  }
`

class App extends React.Component {

  state = {
    user: '',
    followersArray: []
  }

  componentDidMount() {
    // console.log('component has MOUNTED');
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
    axios.get('https://api.github.com/users/jmerz826/followers')
      .then(res => {
        // console.log(res.data);
        this.setState({
          ...this.state,
          followersArray: res.data
        })
      })
      .catch(err => console.error(err));
  }

  componentDidUpdate() {
    console.log('Component has UPDATED');
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      user:e.target.value
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          followersArray: res.data
        })
      })
      .catch(err => console.error(err))
    ;
    
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
      <StyledApp>
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
        <User
          avatar={this.state.avatar}
          name={this.state.name}
          username={this.state.username}
          repos={this.state.repos}
          followerCount={ this.state.followerCount}
        />
        <FollowersList followersArray={this.state.followersArray}/>
      </StyledApp>
    );
  }
}

export default App;
