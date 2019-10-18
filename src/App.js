
import React from 'react';
import './index.css';
import {
  Link
} from "react-router-dom";



class App extends React.Component {

  // onClick() {
  //   window.location.href = "http://google.com";
  // }

  newStyle = {
    width: '50%',
    margin: '10px auto',
    borderStyle: 'dashed',
    textAlign: 'center'
  }

  render() {

    const BtnStyle = {
      width: '100px',
    };

    return (

      <div align="center" id='add'>
        <Link to='/new-post'>
          <button type="button" style={BtnStyle}>Add Post</button>
        </Link>
        <button type="button" style={BtnStyle} >Remove Post</button>
        <br />
      </div>

    )
  }
}
export default App;