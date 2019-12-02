import React, { Component } from 'react';
import Context from '../utils/context'

class Child extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     count:props.code
  //   }
  // }
  

  // state={
  //   count:this.props.code
  // }

  //用componentWillReceiveProps修改传入props的变化
  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps)
  //   this.setState({
  //     count:nextProps.code
  //   })
  // }

  // //新生命周期,静态导入state从props
  // static getDerivedStateFromProps(props,state){
  //   return {
  //     count:props.code
  //   }
  // }
  //迅速扫描在更新前,与componentDidUpdate合用
  // getSnapshotBeforeUpdate(){
  //   // return null
  //   console.log('getSnapshotBeforeUpdate')
  //   return 1
  // }
  // componentDidUpdate(prevProps,prevState,count){//第三个参数是return回来的值，也可不用
    
  //   console.log(count)
  //   console.log(this)
  // }

  render() {
    console.log('child')//先加载子元素
    return (
      <div>
        <Context.Consumer>
          {(props)=>{
            return <div>{props.name}</div>
          }}
        </Context.Consumer>
        {/* {this.state.count} */}
      </div>
    );
  }
}

export default Child;