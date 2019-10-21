
import CList from './CommentList'
import React from 'react';
import './index.css';
import {
  Link,
} from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props)
  }



  render() {

    console.log(this.props);

    return (

      <div align="center">
        <Link to='/new-post'><button type="button" >Add Post</button></Link>
        <button type="button" onClick={this.props.removeComment} >Remove Post</button>
        {this.props.comment.map((item) =>
          <div style={{ width: '50%', margin: '10px auto', borderStyle: 'dashed' }}>
            <div>
              {item.name.value}
            </div>
            <div>
              {item.content.value}
            </div>
            {item.imagePreviewUrl &&
              <img src={item.imagePreviewUrl} alt={"preview"} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />}
          </div>
        )}

      </div>
    )

  }
}


export default App;