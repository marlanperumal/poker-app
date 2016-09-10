import React, {Component} from 'react';
import CardActions from '../actions/CardActions';
import RaisedButton from 'material-ui/RaisedButton';

class RankSelector extends Component{
	constructor(props, context){
		super(props, context);
		this.styles = {
		    rank_selector: {
		    	minWidth: 20,
		    	width: 40,
		    	margin: 5
		    },
		    button_label: {
		    	padding: 0
		    }
		}
		this.rank_symbols = {
			"ace" : "A",
			"two" : "2",
			"three" : "3",
			"four" : "4",
			"five" : "5",
			"six" : "6",
			"seven" : "7",
			"eight" : "8",
			"nine" : "9",
			"ten" : "10",
			"jack" : "J",
			"queen" : "Q",
			"king" : "K"
		}
	}

	render(){
		return (
			<RaisedButton 
				onTouchTap={() => this._changeRank(this.props.rank)} 
				className="flex-item" 
				labelStyle={this.styles.button_label} 
				style={this.styles.rank_selector} 
				label={this.rank_symbols[this.props.rank.toLowerCase()]}
				primary={this.props.cardSelector.rank == this.props.rank}
			/>
		);
		
	}

	_changeRank(value){
		CardActions.changeRank({cardSelector: this.props.cardSelector, value: value});
	}

}

export default RankSelector;