import React, {Component} from 'react';
import CardActions from '../actions/CardActions';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import SuitSelector from './SuitSelector';
import RankSelector from './RankSelector';
import ClearIcon from 'material-ui/svg-icons/content/clear';

class CardSelector extends Component{

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
	}

	render(){
		return (
			<Dialog
	        	title="Select Card"
	        	modal={true}
	        	open={this.props.cardSelector.open}
	        >
	        	<div className="flex-container">
	        		<SuitSelector cardSelector={this.props.cardSelector} suit="Diamonds"/>
	        		<SuitSelector cardSelector={this.props.cardSelector} suit="Clubs"/>
	        		<SuitSelector cardSelector={this.props.cardSelector} suit="Hearts"/>
	        		<SuitSelector cardSelector={this.props.cardSelector} suit="Spades"/>
	        	</div>
	        	<div style={{padding: 5}}>
	        		<Divider/>
	        	</div>
	        	<div className="flex-container">
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Ace"/>
	        		<RankSelector cardSelector={this.props.cardSelector} rank="King"/>
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Queen"/>
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Jack"/>
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Ten"/>
	        	</div>
	        	<div className="flex-container">
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Nine"/>
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Eight"/>
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Seven"/>
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Six"/>
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Five"/>
	        	</div>
	        	<div className="flex-container">
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Four"/>
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Three"/>
	        		<RankSelector cardSelector={this.props.cardSelector} rank="Two"/>
	        		<RaisedButton className="flex-item" labelStyle={this.styles.button_label} style={this.styles.suit_selector} disabled={true} label="&nbsp;"/>
	        		<RaisedButton onTouchTap={() => this._closeCardSelector()} className="flex-item" labelStyle={this.styles.button_label} style={this.styles.suit_selector} icon={<ClearIcon/>}/>
	        	</div>
	        </Dialog>
		);
		
	}

	_closeCardSelector(cardSelector){
		CardActions.closeCardSelector({cardSelector: this.props.cardSelector});
	}

}

export default CardSelector;