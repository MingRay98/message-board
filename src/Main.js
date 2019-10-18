import CInput from './CommentInput';
import App from './App'
import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'> <App /> </Route>
          <Route path='/new-post'> <CInput /> </Route>
        </Switch>
      </Router>

    )
  }


}

export default Main;