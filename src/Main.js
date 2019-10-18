import CInput from './CommentInput';
import App from './App'
import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class test extends React.Component {
  render() {
    return (

      <p>這裡是首頁</p>


    )
  }


}


class Main extends React.Component {
  render() {
    return (
      <Router>
        <div align='center'>Main1</div>
        <Switch>
          <Route exact path='/messgae-board'> <App /> </Route>
          <Route path='/messgae-board/new-post'> <CInput /> </Route>
        </Switch>
        <div align='center'>Main2</div>
      </Router>

    )
  }


}

export default Main;