import React, { Component } from 'react';
import Landing from './Components/Landing'
import {Route, Switch, withRouter} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Landing}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
