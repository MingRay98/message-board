import CInput from './CommentInput';
import App from './App.js'
import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





class Main extends React.Component {
  render() {
    return (
      <Router>
        <div align='center'>Main1</div>
        <Switch>
          <Route exact path='/'> <App /> </Route>
          <Route path='/new-post'> <CInput /> </Route>
        </Switch>
        <div align='center'>Main2</div>
      </Router>

    )
  }


}

export default Main;