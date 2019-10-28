import CInput from './Component/CommentInput';
import App from './App'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [] //留言陣列
    };
  }

  addPost = (post) => { //增加留言
    const comments = this.state.comments;
    comments.push(post);
    this.setState({ comments: comments });
  };

  removePost = () => { //移除留言
    const comments = this.state.comments;
    comments.pop();
    this.setState({ comments: comments });
  }

  render() {
      //Router包住 才能用裡面的功能 兩種不同 Route 渲染頁面及傳參數的方式
    return (
      <Router>
        <Switch> 
          <Route exact path='/message-board'> <App comments={this.state.comments} removePost={this.removePost} /> </Route>
          <Route path='/message-board/new-post' render={(props) => <CInput {...props} addPost={this.addPost} />} />
        </Switch>
      </Router>
    )
  }
}

export default Main;