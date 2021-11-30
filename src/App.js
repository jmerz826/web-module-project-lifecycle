import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    user: ''
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
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Github Info</h1>
        <form>
          <input
            type='text'
            placeholder='GitHub Handle'
            onChange={this.handleChange}
          />
          <button onClick={this.handleSearch}>Search</button>
        </form>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
