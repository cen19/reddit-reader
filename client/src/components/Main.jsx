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
    location.href = Config.url;
    // fetch(Config.url, {method: 'GET', mode: 'no-cors'})
    //   .then(res => {
    //     console.log('in here~~~');
    //     console.log(res.json());
    //     res.json();
    //   })
    //   .then(function(data) {
    //     console.log('potential data', data);
    //   })
    //   .catch(err => {
    //     console.log('Error logging in with Reddit, ', err)
    //   })
    // console.log('working button');
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
