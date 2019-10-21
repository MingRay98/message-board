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

  constructor(props) {
    super(props);
    this.state = {
      comment: []
    };
  }

  addComponent = (post) => {
    const comment = this.state.comment;
    comment.push(post);
    this.setState({ component: comment });
  };

  removeComment =()=>{
    const comment = this.state.comment;
    comment.pop();
    this.setState({ component: comment });
  }

  render() {

    // console.log(this.state);
    // console.log(this.props);


    return (
      <Router>
        <Switch>
          <Route exact path='/message-board'> <App  comment={this.state.comment} removeComment ={this.removeComment} /> </Route>
          <Route path='/new-post'> <CInput addComponent={this.addComponent} /> </Route>
        </Switch>
      </Router>

    )
  }
}

export default Main;