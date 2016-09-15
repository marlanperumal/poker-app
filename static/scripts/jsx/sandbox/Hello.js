import React, {Component} from 'react';

class Hello extends Component{
	constructor(props, context){
		super(props, context);
	}

	render(){
		return (
			<div>
				<span>
					Hello World
				</span>
			</div>
		);	
	}	
}

export default Hello;