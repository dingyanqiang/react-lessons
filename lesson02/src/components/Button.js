import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component{
	render(){
		return(
			 <button style={{background: this.props.color}}>
        {this.props.children}
      </button>
		)
	}
}

Button.contextTypes = {
  color: PropTypes.string
};

export default Button;