import React from 'react';

class CList extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div >
            {this.props.item && this.props.item.name}<br/>
      </div>
    )
  }
}

export default CList;