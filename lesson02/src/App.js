import React, { Component } from 'react';
import PropTypes from 'prop-types';


import MessageList from './components/MessageList';

import ControlForm from './components/ControlForm';
import MulEntryForm from './components/MulEntryForm';
import NoControlForm from './components/NoControlForm';
import BindComponent from './components/BindComponent';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
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

  }
  
  render() {
    let { num, list} = this.state;
    return (
      <div className="App">
        <BindComponent title="Bind应用方式" />
        <ControlForm />
        <MulEntryForm />
        <NoControlForm />
      </div>
    );
  }
}

App.propTypes = {
  num: PropTypes.number.isRequired,
  list: PropTypes.array
};
App.defaultProps = {
  num: 0,
  list: []
}
App.displayName = 'ReactApp';

export default App;
