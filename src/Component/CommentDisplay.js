import '../index.css'
import React, { Component } from 'react';

class CommentDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div align="center">
        <br/>
         {this.props.comments.map((item) =>
          <div className='Comment'>
            <div>
              {item.name.value}
            </div>
            <div>
              {item.content.value}
            </div>
            {item.imagePreviewUrl &&
              <img src={item.imagePreviewUrl} alt={"preview"}  />}
          </div>
        )}
      </div>
    );
  }
}

export default CommentDisplay;