import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BindComponent extends Component{
	constructor(props){
		super(props);
		this.state = {};
		this.clickHandleConstructorBind = this.clickHandleConstructorBind.bind(this);
	}
	clickHandleNotBind(e){
		console.log(e.target);
    console.log(this);
  }
  clickHandleBind(e){
  	console.log(e.target);
    console.log(this);
  }
  clickHandleConstructorBind(e){
  	console.log(e.target);
    console.log(this);
  }
  clickHandleBindFunc(e){
  	console.log(e.target);
    console.log(this);
  }
  
  clickHandleArrow = (e) => {
    console.log(this);
  }
  
	render(){
		return(
			<dl>
				<dt><h3>{this.props.title}</h3></dt>
				{
					/*
					<dd>
						<button type="button" onClick={::this.clickHandleNotBind}>函数绑定运算符</button>
					</dd>	
					 */
				}
				<dd>
					<button type="button" onClick={this.clickHandleNotBind}>Button Not Bind</button>
				</dd>
				<dd>
	        <button type="button" onClick={this.clickHandleBind.bind(this)}>Button Bind </button>
	      </dd>
	      <dd>
	        <button type="button" onClick={this.clickHandleConstructorBind}>Button Constructor Bind </button>
	      </dd>
	      <dd>
	        <button type="button" onClick={(e) => { this.clickHandleBindFunc(e) }}>Button Bind Arrow Func</button>
	      </dd>
	      <dd>
	        <button type="button" onClick={this.clickHandleArrow}>Button Arrow Func</button>
				</dd>
			</dl>
		)
	}
}

BindComponent.propTypes = {
	title: PropTypes.string
};
BindComponent.defaultProps = {
	title: '标题'
};

export default BindComponent;