import React from 'react';
import Config from '../config';
import LocalSave from './LocalSave.jsx';
import RedditLogin from './RedditLogin.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // bindings
  }


  render() {
    

    return (
      <div>
        <LocalSave />
        <br></br>
        <RedditLogin />
      </div>
    );
  }
}

export default Main;
