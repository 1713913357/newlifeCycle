import React, { Component } from 'react';
import Child from './child'
class Home extends Component {
  render() {
    let {home}=this.props
    return (
      <div>
        <Child></Child>
        {home}
        <button onClick={()=>this.handleHome(home)}>改变home</button>
      </div>
    );
  }
  handleHome=(home)=>{
    home++
    this.props.handleHome(home)
  }
}

export default Home;