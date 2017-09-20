import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Increment from './components/Increment';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //getDefaultProps
  //getInitialState
  constructor(props){
    super(props);
    this.state = {
      sortBtnText:'倒序',
      sortStatus: true,
      num: 0,
      list: [1,2,3,4]
    };
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentDidMount(){
    console.log('componentDidMount');
    // this.setState({num:this.state.num+1});
    // console.log(this.state.num);
    // this.setState({num:this.state.num+1});
    // console.log(this.state.num);
    // this.setState({num:this.state.num+1});
    // console.log(this.state.num);
    // this.setState({num:this.state.num+1});
    // console.log(this.state.num);
    setTimeout(() => {
      this.setState({num:this.state.num+1});
      console.log(this.state.num);
      this.setState({num:this.state.num+1});
      console.log(this.state.num);
      this.setState({num:this.state.num+1});
      console.log(this.state.num);
      this.setState({num:this.state.num+1});
      console.log(this.state.num);
    },0);
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  getList = (list) => {
    return list.map((n,index)=>{
      return <span key={index}>{n}</span>;
    });
  }
  listSort = () => {
    this.setState((prevState, props) => {
      return {
        sortStatus: !prevState.sortStatus,
        sortBtnText: prevState.sortStatus ? '正序' : '倒序',
        list: prevState.list.sort((a, b) => {
          if(prevState.sortStatus){
            return b - a;
          }else{
            return a - b;
          }
        })
      }
    });

    // this.setState({
    //   sortStatus: !this.state.sortStatus,
    //   sortBtnText: this.state.sortStatus ? '正序' : '倒序',
    //   list: this.state.list.sort((a, b) => {
    //     if(sortStatus){
    //       return b - a;
    //     }else{
    //       return a - b;
    //     }
    //   })
    // });
  }
  add = () => {
    let { num } = this.state;
    this.setState({
      num: num+1
    });
    //this.subtract();
  }
  subtract = () => {
    let { num } = this.state;
    this.setState({
      num: num-1
    });
  }
  addAsyn = () => {
    let { num } = this.state;
    setTimeout(() => {
      this.setState({
        num: num+1
      });
    }, 1000);
  }
  subtractAsyn = () => {
    let { num } = this.state;
    setTimeout(() => {
      this.setState({
        num: num-1
      });
    }, 1000);
  }
  render() {
    let { num, list, sortBtnText } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div>number:{num}</div>
          <div>list:{this.getList(list)}</div>
        </div>
        <div>
          <button onClick={this.add}>加1</button>
          <button onClick={this.subtract}>减1</button>
          <button onClick={this.addAsyn}>asyn加1</button>
          <button onClick={this.subtractAsyn}>asyn减1</button>
        </div>
        <div>
          <button onClick={this.listSort}>list {sortBtnText}</button>
        </div>
        <Increment />
      </div>
    );
  }
}

App.propTypes = {
  sortBtnText: PropTypes.string,
  sortStatus: PropTypes.bool,
  num: PropTypes.number.isRequired,
  list: PropTypes.array
};
App.defaultProps = {
  sortBtnText:'倒序',
  sortStatus: true,
  num: 0,
  list: [1,2,3,4]
}
App.displayName = 'ReactApp';

export default App;
