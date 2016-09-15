import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Hello from './sandbox/Hello'

injectTapEventPlugin();

class Sandbox extends Component{
	constructor(props, context){
		super(props, context);
	}

	render(){
		return (
			<Hello/>
		);	
	}

	
}

ReactDOM.render(
    <Sandbox />,
    document.getElementById('sandbox')
);