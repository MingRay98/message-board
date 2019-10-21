import React from 'react';
import './index.css';
import {
  Link
} from "react-router-dom";

class CInput extends React.Component {

  constructor(props) {
    super(props)
    this.handleImageChange = this.handleImageChange.bind(this);
    this.openFileUpload = this.openFileUpload.bind(this);
    this.showState = this.showState.bind(this);

    this.state = {
      name: '',
      content: '',
      imagePreviewUrl: ''
    }

  }

  handleSubmit = () => {
    const postData = {name: this.state.name, content: this.state.content, imagePreviewUrl: this.state.imagePreviewUrl};
    this.props.addComponent(postData);
  };



  handleImageChange(event) {
    this.setState({
      imagePreviewUrl: URL.createObjectURL(event.target.files[0])
    })
  }


  openFileUpload() {
    document.getElementById("fileUpload").click();
  }

  showState() {
    this.setState({
      name: this.state.name,
      content: this.state.content
    })

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
        <input type="text" name="title" maxLength="10" style={{ width: '20%' }} ref={(input) => { this.state.name = input; }}></input><br />

        <span >Content:<br /></span>
        <textarea cols="50" rows="5" name="content" ref={(input) => { this.state.content = input; }}>Please input Content.</textarea>

        <input type="file" id='fileUpload' accept="image/*" onChange={(e) => this.handleImageChange(e)} style={{ display: 'none' }}></input>

        {imageText}
        {imagePreviewUrl}
        <br />
        <br />

        <button type="file" style={{ width: '100px' }} onClick={this.openFileUpload}>upload</button>


        <Link to='/message-board' >
        <button type="button" style={{ width: '100px' }} onClick={this.handleSubmit}>submit</button>
        </Link>
        {/* <br />
        {this.state.name.value}
        <br />
        {this.state.content.value} */}
      </div>
    )
  }
}

export default CInput;
