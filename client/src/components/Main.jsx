import React from 'react';
import Config from '../config';
import LocalSave from './LocalSave.jsx';
import RedditLogin from './RedditLogin.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      redditCreds: null
    };
    // bindings
    this.handleRedditLogin = this.handleRedditLogin.bind(this);
    this.handleLocalSave = this.handleLocalSave.bind(this);
  }

  handleRedditLogin() {
    // fetch('http://localhost:3000/redditLogin', {method: 'GET'})
    //   .then(res => res.json())
    //   .then(data => this.setState({
    //     redditCreds: data
    //   }))
    //   .catch(err => {
    //     console.log('Error logging in with Reddit, ', err)
    //   })
    console.log('working button');
  }

  handleLocalSave() {}

  render() {
    

    return (
      <div>
        <LocalSave />
        <br></br>
        <RedditLogin login={this.handleRedditLogin} />
      </div>
    );
  }
}

export default Main;
