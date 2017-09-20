import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Increment extends Component{
	constructor(props){
		super(props);
		this.state = {
			count: props.count
		}
	}
	incrementObj(){
		this.setState({
			count: this.state.count+1
		});
		this.setState({
			count: this.state.count+1
		});
	}
	incrementFunc(){
		this.setState((prevState,props) => {
			return {
				count: prevState.count+1
			};
		});
		this.setState((prevState,props) => {
			return {
				count: prevState.count+1
			};
		});
	}
	render(){
		return(
			<div style={{ textAlign:'center',fontSize:30,marginTop:50 }}>
				<div>Increment Component</div>
				<div>count:{this.state.count}</div>
				<button onClick={this.incrementObj.bind(this)}>setStateByObj</button>
				<button onClick={this.incrementFunc.bind(this)}>setStateByUpdateFunc</button>
			</div>
		);
	}
}

Increment.displayName = 'Increment';
Increment.propTypes = {
	count: PropTypes.number
};
Increment.defaultProps = {
	count: 0
};

export default Increment;