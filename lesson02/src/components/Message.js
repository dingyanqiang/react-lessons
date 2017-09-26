import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Message extends Component{
	render() {
    return (
      <div>
        {this.props.text} <Button color={this.props.color}>Delete</Button>
      </div>
    );
  }
}


export default Message;