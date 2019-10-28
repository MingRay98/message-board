
import CDisplay from './Component/CommentDisplay'
import React from 'react';
import './index.css';
import './Component/button.css'
import {
  Link
} from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div align="center">
        <Link to='/message-board/new-post'><button className="changeColorButton" >Add Post</button></Link>
        <button  onClick={this.props.removePost} className="changeColorButton" >Remove Post</button>
        <CDisplay comments={this.props.comments} />
      </div>
    )
  }
}


export default App;