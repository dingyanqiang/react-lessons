import React, { Component } from 'react';

class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			age: 0
		};
	}
	componentWillReceiveProps(nextProps){
	}
	componentWillUpdate(nextProps, nextState){
	}
	shouldComponentUpdate(nextProps, nextState){
		return true;
	}
	componentDidUpdate(prevProps, prevState){
	}
	handleSubmit = (event) => {
		console.log('this.state', this.state);
		event.preventDefault();
	}
	handleSelectChange = (event) => {
		this.setState({name: event.target.value});
	}
	handleInputChange = (event) => {
		this.setState({age: event.target.value});
	}
	componentDidMount(){
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<h3>受控组件</h3>
				<div>
					<label>
          姓名:
	          <select value={this.state.name} onChange={this.handleSelectChange}>
	          	<option value="二货">二货</option>
	            <option value="张三">张三</option>
	            <option value="李四">李四</option>
	            <option value="王五">王五</option>
	          </select>
	        </label>	
				</div>
				<div>
					<label>
	          年龄:
	          <input value={this.state.age} onChange={this.handleInputChange} />
	        </label>
				</div>
				<div>
					<input type="submit" value="Submit" />
				</div>
				
      </form>
		);
	}
}

export default Form;