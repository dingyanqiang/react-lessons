import React, { Component } from 'react';

class NoControlForm extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
    event.preventDefault();
    //console.log(this.refs.selectName.value);
    console.log(this.xingming);
  }
  componentDidMount(){
  	console.log(this.refs);
  }
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<h3>不受控组件</h3>
				<div>
					<label>
          	姓名:
	          <select name="xingming" ref={(xingming) => this.xingming = xingming} >
	          	<option value="二货">二货</option>
	            <option value="张三">张三</option>
	            <option value="李四">李四</option>
	            <option value="王五">王五</option>
	          </select>
	        </label>
	      </div>
	      <div>
	      	<label>
	        	性别:
	        	<input name="sex" defaultValue="You" style={{ width: 18, height: 18 }} type="radio" ref={(sex) => this.sex = sex} />
	        	<input name="sex" defaultValue="Me" style={{ width: 18, height: 18 }} defaultChecked type="radio" ref={(sex) => this.sex = sex} />
	      	</label>
	      </div>
	      <div>
	      	<label>
	      		简介:
	      		<input defaultValue="fsadf"  type="text"  />
	      	</label>
	      </div>
	      <div>
	      	<label>
	        	爱好:
	        	<select name="interest" defaultChecked="李四" ref={(interest) => {this.interest = interest}} >
	          	<option value="篮球">篮球</option>
	            <option value="足球">足球</option>
	            <option value="乒乓球">乒乓球</option>
	            <option value="羽毛球">羽毛球</option>
	          </select>
	      	</label>
	      </div>
				<div>
					<input type="submit" value="Submit" />
				</div>
      </form>
		);
	}
}

export default NoControlForm;
