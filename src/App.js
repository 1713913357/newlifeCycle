import React, { Component } from 'react';
import Home from  './components/home'
// import Child from  './components/child'
// import Context from './utils/context'
class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.handleClick.bind(this)//性能最好,查找this，比箭头函数快点
  // }
  state={
    code:1,
    home:11,
    child:{
      name:'张三',
      age:18

    }
  }
  render() {
    console.log('render')
    // let {child}=this.state
    return (
      <div>
        {/* <Child code={this.state.code}></Child> */}
        {/* <Context.Provider value={child}> */}
           <Home home={this.state.home} handleHome={this.handleHome}></Home>
        {/* </Context.Provider> */}
       
        {/* {this.state.code} */}
        <button onClick={this.handleClick}>点击</button>
      </div>
    );
  }
  handleHome=(home)=>{
    this.setState({home})
  }
  handleClick=()=>{
    //还可以this.handleClick.bind(this)性能最差，每次render都要查找this
    this.setState({
      code:this.state.code+1
    })
    // this.setState({
    //   code:this.state.code+1
    // })
    // console.log(this.state.code,'one')
    // setTimeout(() => {//因为setTimeout不是react中函数
    //   this.setState({
    //     code:this.state.code+1
    //   })
    //   console.log(this.state.code,'two')
    //   this.setState({
    //     code:this.state.code+1
    //   })
    //   console.log(this.state.code,'three')
    // }, 0);
    // console.log(this.state.code,'four')
  }
  // 1 "one"
  // 1 "four"
  // render
  // render
  // 3 "two"
  // render
  // 4 "three"
}

export default App;
