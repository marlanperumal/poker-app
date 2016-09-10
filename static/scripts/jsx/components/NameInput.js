import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppActions from '../actions/AppActions';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

class NameInput extends Component{

	constructor(props, context){
		super(props, context);
		this.state = {name: props.nameInput.name !== undefined ? props.nameInput.name : ""};
	}

	render(){
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.closeNameInput}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				onTouchTap={() => this.changeName()}
			/>,
		];
		if (this.props.nameInput.error !== undefined){
			var textField = (
				<TextField
					floatingLabelText="Name"
					style={{width: 200}}
					onChange={(e) => this.handleNameChange(e)}
					value={this.state.name}
					errorText={this.props.nameInput.error}
				/>
			);
		}
		else{
			var textField = (
				<TextField
					floatingLabelText="Name"
					style={{width: 200}}
					value={this.state.name}
					onChange={(e) => this.handleNameChange(e)}
				/>
			);	
		}
		return (
			<Dialog
	        	title="Player Profile"
	        	actions={actions}
	        	modal={true}
	        	open={this.props.nameInput.open}
	        	autoDetectWindowHeight={false}
	        >
		        {textField}
	        </Dialog>
		);
		
	}

	handleNameChange(e){
		this.setState({name: e.target.value})
	}

	changeName(){
		AppActions.changeName({name: this.state.name})
	}

	closeNameInput(){
		AppActions.closeNameInput({});
		
	}

}

export default NameInput;