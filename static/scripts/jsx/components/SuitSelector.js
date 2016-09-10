import React, {Component} from 'react';
import CardActions from '../actions/CardActions';
import RaisedButton from 'material-ui/RaisedButton';

class SuitSelector extends Component{

	constructor(props, context){
		super(props, context);
		this.styles = {
		    suit_selector: {
		    	minWidth: 20,
		    	width: 40,
		    	margin: 5
		    },
		    button_label: {
		    	padding: 0
		    }
		}
		this.suit_symbols = {
			"hearts": "\u2665",
			"diamonds": "\u2666",
			"clubs": "\u2663",
			"spades": "\u2660"
		}
	}

	render(){
		return (
			<RaisedButton 
				onTouchTap={() => this._changeSuit(this.props.suit)} 
				className="flex-item" 
				labelStyle={this.styles.button_label} 
				style={this.styles.suit_selector} 
				label={this.suit_symbols[this.props.suit.toLowerCase()]}
				primary={this.props.cardSelector.suit == this.props.suit}
			/>
		);
		
	}

	_changeSuit(value){
		CardActions.changeSuit({cardSelector: this.props.cardSelector, value: value});
	}

}

export default SuitSelector;