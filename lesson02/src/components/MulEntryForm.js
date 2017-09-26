import React, { Component } from 'react';

class MulEntryForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: '张三',
			age: 10,
			isGay: true,
			telephone: '',
			address: ''
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
	}
	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name}  = event.target;
		this.setState({
			[name]: value
		});
	}
	
	componentDidMount(){}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<h3>多输入 受控组件</h3>
				<div>
					<label>
          姓名:
	          <select name="name" value={this.state.name} onChange={this.handleChange}>
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
	          <input name="age" value={this.state.age} onChange={this.handleChange} />
	        </label>
				</div>
				<div>
					<label>
          	是Gay:
	          <input name="isGay" type="checkbox" style={{ width: 18, height: 18 }} checked={this.state.isGay} onChange={this.handleChange} />
	        </label>
				</div>
				<div>
					<label>
	          电话:
	          <input name="telephone" value={this.state.telephone} onChange={this.handleChange} />
	        </label>
				</div>
				<div>
					<label>
	          地址:
	          <input name="address" value={this.state.address} onChange={this.handleChange} />
	        </label>
				</div>
				<div>
					<input type="submit" value="Submit" />
				</div>
				
      </form>
		);
	}
}

export default MulEntryForm;