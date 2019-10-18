import CInput from './CommentInput';
import App from './App'
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
        <div></div>
        <Switch>
          <Route exact path='https://mingray98.github.io/message-board/'> <App /> </Route>
          <Route path='https://mingray98.github.io/message-board/new-post'> <CInput /> </Route>
        </Switch>
      </Router>

    )
  }


}

export default Main;