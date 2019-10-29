import React from 'react';
import '../index.css';
import './button.css'
import {
  Link
} from "react-router-dom";

class CInput extends React.Component {

  constructor(props) {
    super(props)
    this.handleImageChange = this.handleImageChange.bind(this); //沒用箭頭函數要用bind綁定
    this.openFileUpload = this.openFileUpload.bind(this); 
    this.state = {
      imagePreviewUrl: ''
    }
  }

  handleSubmit = () => { //用了就不用綁，先把所要傳的資料包成array再push上去
    const postData = {
      name: this.title.value, 
      content: this.content.value, 
      imagePreviewUrl: this.state.imagePreviewUrl};
    this.props.addPost(postData);
  };

  handleImageChange(event) { //創建預覽連結
    this.setState({
      imagePreviewUrl: URL.createObjectURL(event.target.files[0])
    })
  }

  openFileUpload() { //打開上傳功能
    document.getElementById("fileUpload").click();
  }

  render() {

    let imageText = null;
    let imagePreviewUrl = null;

    if (this.state.imagePreviewUrl) {
      imageText = <span >Image Preview:<br /></span>;
      imagePreviewUrl = <img alt="" src={this.state.imagePreviewUrl} />;
    }

    return (
      <div >
        <span >Title:<br /></span>
        <input type="text" name="title" maxLength="10" style={{ width: '20%' }} ref={(input) => { this.title = input;}}></input><br />
        <span >Content:<br /></span>
        <textarea cols="50" rows="5" name="content" defaultValue="Please input Content." ref={(input) => { this.content = input; }}  />
        <input type="file" id='fileUpload' accept="image/*" onChange={(e) => this.handleImageChange(e)} style={{ display: 'none' }}></input>

        {imageText}
        {imagePreviewUrl}<br /><br />

        <button className='uploadButton' onClick={this.openFileUpload}>upload</button>
        <Link to='/message-board' >
        <button type="button" className="changeColorButton" onClick={this.handleSubmit}>submit</button>
        </Link>
      </div>
    )
  }
}

export default CInput;
