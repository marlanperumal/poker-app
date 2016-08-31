import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {redA700, grey800, redA400} from 'material-ui/styles/colors';
import CardActions from '../actions/CardActions';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
		this.state = {
			open: false,
		};
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
		                    <span className="red-suit" style={suit_style}>{suit_symbol}</span>
		                </div>
		            </Paper>
	            </div>
			);	
		}
		else{
			const actions = [
		      <FlatButton
		        label="Cancel"
		        primary={true}
		        onTouchTap={() => this._closeCardSelector()}
		      />,
		      <FlatButton
		        label="Submit"
		        primary={true}
		        onTouchTap={() => this._selectCard()}
		      />,
		    ];
			return(
				<div>
					<Paper onTouchTap={() => this._openCardSelector()} style={this.styles.card} zDepth={1}>
						<div className="card-back" style={this.styles.card_back}>
							&nbsp;
						</div>
					</Paper>
					<Dialog
			        	title="Select Card"
			        	actions={actions}
			        	modal={true}
			        	open={this.props.card.cardSelectorOpen}
			        >
			        	<div>
			        		<div>
					        	<SelectField 
					        		floatingLabelText="Rank"
					        		floatingLabelFixed={true}
					        		hintText="Ace"
					        		value={this.props.card.rank}
					        		onChange={(event, index, value) => this._changeRank(value)}
					        		style={{width:220}}
					        	>
					        		<MenuItem key={1} value={"Ace"} secondaryText="Ace" primaryText="A"/>
					        		<MenuItem key={2} value={"King"} secondaryText="King" primaryText="K"/>
					        		<MenuItem key={3} value={"Queen"} secondaryText="Queen" primaryText="Q"/>
					        		<MenuItem key={4} value={"Jack"} secondaryText="Jack" primaryText="J"/>
					        		<MenuItem key={5} value={"Ten"} secondaryText="Ten" primaryText="10"/>
					        		<MenuItem key={6} value={"Nine"} secondaryText="Nine" primaryText="9"/>
					        		<MenuItem key={7} value={"Eight"} secondaryText="Eight" primaryText="8"/>
					        		<MenuItem key={8} value={"Seven"} secondaryText="Seven" primaryText="7"/>
					        		<MenuItem key={9} value={"Six"} secondaryText="Six" primaryText="6"/>
					        		<MenuItem key={10} value={"Five"} secondaryText="Five" primaryText="5"/>
					        		<MenuItem key={11} value={"Four"} secondaryText="Four" primaryText="4"/>
					        		<MenuItem key={12} value={"Three"} secondaryText="Three" primaryText="3"/>
					        		<MenuItem key={13} value={"Two"} secondaryText="Two" primaryText="2"/>
					        	</SelectField>
				        	</div>
				        	{
				        	// <div className="select-suit-container">
			        		// 	<span data-selected={this.props.card.suit == "Diamonds"} data-value={"Diamonds"}>&diams;</span>
			        		// 	<span data-selected={this.props.card.suit == "Hearts"} data-value={"Hearts"}>&hearts;</span>
			        		// 	<span data-selected={this.props.card.suit == "Clubs"} data-value={"Clubs"}>&clubs;</span>
			        		// 	<span data-selected={this.props.card.suit == "Spades"} data-value={"Spades"}>&spades;</span>
			        		// </div>
		        			}


				        	
				        	<SelectField 
				        		floatingLabelText="Suit"
				        		floatingLabelFixed={true}
				        		hintText="Spades"
				        		value={this.props.card.suit}
				        		onChange={(event, index, value) => this._changeSuit(value)}
				        		style={{width:220}}
				        	>
				        		<MenuItem key={1} value={"Diamonds"} primaryText="Diamonds" secondaryText="&diams;"/>
				        		<MenuItem key={2} value={"Hearts"} primaryText="Hearts" secondaryText="&hearts;"/>
				        		<MenuItem key={3} value={"Clubs"} primaryText="Clubs" secondaryText="&clubs;"/>
				        		<MenuItem key={4} value={"Spades"} primaryText="Spades" secondaryText="&spades;"/>
				        	</SelectField>
				        	
			        	</div>
			        </Dialog>
		        </div>
			);
		}
		
	}

	_openCardSelector(){
		CardActions.openCardSelector({card: this.props.card});
	}

	_closeCardSelector(){
		CardActions.closeCardSelector({card: this.props.card});
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