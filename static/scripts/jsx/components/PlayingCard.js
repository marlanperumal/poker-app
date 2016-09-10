import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {grey800, redA400} from 'material-ui/styles/colors';
import CardActions from '../actions/CardActions';

class PlayingCard extends Component{
	constructor(props, context){
		super(props, context);
		this.styles = {
			card: {
		        display: 'table',
		        height: 120,
		        width: 90,
		        margin: 10,
		        textAlign: 'center',
		    },
		    card_contents: {
		        display: 'table-cell',
		        verticalAlign: 'middle',
		        fontSize: 30,
		    },
		    card_back: {
		    	margin: 5,
		    	height: 110,
		    	width: 80,
		    },
		    red_suit: {
		        color: redA400
		    },
		    black_suit: {
		        color: grey800
		    },
		    suit_selector: {
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
		const zDepth = this.props.zDepth == undefined ? 2 : this.props.zDepth;
		if (this.props.card.revealed){
			var suit_style = {};
			var suit_symbol = "";
			switch (this.props.card.suit.toLowerCase()){
				case "hearts":
					suit_symbol = "\u2665";
					suit_style = this.styles.red_suit;
					break;
				case "diamonds":
					suit_symbol = "\u2666";
					suit_style = this.styles.red_suit;
					break;
				case "clubs":
					suit_symbol = "\u2663";
					suit_style = this.styles.black_suit;
					break;
				case "spades":
					suit_symbol = "\u2660";
					suit_style = this.styles.black_suit;
					break;
			}
			var rank_symbol = this.rank_symbols[this.props.card.rank.toLowerCase()];
			return(
				<div>
					<Paper onTouchTap={() => this._deselectCard()} style={this.styles.card} zDepth={3}>
		                <div style={this.styles.card_contents}>
		                    <span style={suit_style}>{rank_symbol}</span>
		                    <span style={suit_style}>{suit_symbol}</span>
		                </div>
		            </Paper>
	            </div>
			);	
		}
		else{
			return(
				<div>
					<Paper onTouchTap={() => this._selectCard()} style={this.styles.card} zDepth={1}>
						<div className="card-back" style={this.styles.card_back}>
							&nbsp;
						</div>
					</Paper>
		        </div>
			);
		}
		
	}

	_selectCard(){
		CardActions.selectCard({card: this.props.card});
	}

	_deselectCard(){
		CardActions.deselectCard({card: this.props.card});
	}

	_changeRank(value){
		CardActions.changeRank({card: this.props.card, value: value})
	}

	_changeSuit(value){
		CardActions.changeSuit({card: this.props.card, value: value})
	}

}

export default PlayingCard;