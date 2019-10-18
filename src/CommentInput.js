import React from 'react';
import './index.css';
import {
  Link
} from "react-router-dom";

class CInput extends React.Component {



  state = {
    file: '',
    imagePreviewUrl: ''
  };

  _handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({ file: file, imagePreviewUrl: reader.result });
    }
    reader.readAsDataURL(file)

  }

  openFileUpload() {
    document.getElementById("fileUpload").click();
  }



  render() {

    const SpanStyle = {
      padding: "10px 0px",
      display: "grid",
      content: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    }


    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    let $imageText = null;

    if (imagePreviewUrl) {
      $imageText = <span style={SpanStyle}>Image Preview:<br /></span>;
      $imagePreview = (<img alt='123' src={imagePreviewUrl} />);
    }




    return (
      <div style={{ textAlign: 'center' }} className="comment-input" id='inputBox'>
        <span style={SpanStyle}>Title:<br /></span>
        <input type="text" name="title" maxlength="10" style={{ width: '20%' }}></input>
        <div>
          <span style={SpanStyle}>Content:<br /></span>
          <textarea cols="50" rows="5" name="content">Please input Content.</textarea>
        </div>

        {$imageText}
        {$imagePreview}
        <br />
        <br />

        <input type="file" id='fileUpload' accept="image/*" onChange={this._handleImageChange} style={{ display: 'none' }}></input>
        <button type="file" style={{ width: '100px' }} onClick={this.openFileUpload}>upload</button>
        <Link to='/'>
          <button type="button" style={{ width: '100px' }} onClick={this.showRootAndHiddenInputBox}>submit</button>
        </Link>



      </div>
    )
  }
}

export default CInput;
