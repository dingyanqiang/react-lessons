import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

class MessageList extends Component{
	getChildContext() {
    return {color: "purple"};
  }
  render() {
    // const children = this.props.messages.map((message) =>
    //   <Message text={message.text} />
    // );
    // return <div>{children}</div>;
    return <Message text={'text'} />
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string
};

export default MessageList;