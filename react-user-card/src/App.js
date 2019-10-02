import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      followers: []
    };
  };

  componentDidMount() {
    this.getGithubUser();
    this.getGithubFollowers();
  }

  getGithubUser = async () => {
    let res = await axios.get('https://api.github.com/users/justin-kane');
    this.setState({
      user: res.data
    });
    //console.log(res)
  };

  getGithubFollowers = async () => {
    let res = await axios.get('https://api.github.com/users/justin-kane/followers');
    this.setState({
      followers: res.data
    });
  };

  render() {
    const { user, followers } = this.state;
    return (
      <div className="App" >
        <h1>{user.login}'s Github card!</h1>
        <img src={user.avatar_url} alt='profile'></img>
        <h2>Followers : </h2>
        {followers.map(follower => (
          <h3>{follower.login}</h3>
        ))}
      </div>
    );
  }
}

export default App;
