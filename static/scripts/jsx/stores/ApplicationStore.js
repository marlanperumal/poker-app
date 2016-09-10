import alt from '../alt';
import CardActions from '../actions/CardActions';
import AppActions from '../actions/AppActions';

class ApplicationStore {
	constructor(){
		this.holeCards = [];
		this.communityCards = [];
		this.numPlayers = 5;
		this.drawer = {
			open: false
		}
		this.cardSelector = {
			card: undefined,
			suit: undefined,
			rank: undefined,
			open: false
		}
		this.result = {
			win_percent: 1/this.numPlayers,
			rhs: 1
		}

		for (var i = 0; i < 2; i++){
			this.holeCards.push({
				revealed: false,
				rank: undefined,
				suit: undefined,
			})
		}

		for (var i = 0; i < 5; i++){
			this.communityCards.push({
				revealed: false,
				rank: undefined,
				suit: undefined,
			})
		}
		this.bindListeners({
			onSelectCard: CardActions.selectCard,
			onDeselectCard: CardActions.deselectCard,
			onCloseCardSelector: CardActions.closeCardSelector,
			onChangeRank: CardActions.changeRank,
			onChangeSuit: CardActions.changeSuit,
			onRunSim: AppActions.runSim,
			onUpdateResults: AppActions.updateResults,
			onToggleDrawer: AppActions.toggleDrawer,
			onClearHand: AppActions.clearHand,
			onChangeNumPlayers: AppActions.changeNumPlayers
		});
	}

	onDeselectCard(params){
		params.card.revealed = false;
		params.card.rank = undefined;
		params.card.suit = undefined;
	}

	onSelectCard(params){
		this.cardSelector.card = params.card;
		this.cardSelector.open = true;
	}

	onCloseCardSelector(params){
		params.cardSelector.card = undefined;
		params.cardSelector.suit = undefined;
		params.cardSelector.rank = undefined;
		params.cardSelector.open = false;
	}

	onChangeRank(params){
		if (params.cardSelector.rank == params.value){
			params.cardSelector.rank = undefined
		}
		else{
			params.cardSelector.rank = params.value;
			if ((params.cardSelector.suit) !== undefined){
				params.cardSelector.card.revealed = true;
				params.cardSelector.card.rank = params.cardSelector.rank;
				params.cardSelector.card.suit = params.cardSelector.suit;
				this.onCloseCardSelector({cardSelector: params.cardSelector});

			}
		}
		
	}

	onChangeSuit(params){
		if (params.cardSelector.suit == params.value){
			params.cardSelector.suit = undefined
		}
		else{
			params.cardSelector.suit = params.value;
			if ((params.cardSelector.rank) !== undefined){
				params.cardSelector.card.revealed = true;
				params.cardSelector.card.rank = params.cardSelector.rank;
				params.cardSelector.card.suit = params.cardSelector.suit;
				this.onCloseCardSelector({cardSelector: params.cardSelector});
			}
		}
	}

	onRunSim(params){

	}

	onUpdateResults(params){
		this.result.win_percent = params["win percentage"];
		this.result.rhs = params["relative hand strength"];
	}

	onToggleDrawer(params){
		this.drawer.open = !this.drawer.open;
	}

	onClearHand(params){
		this.holeCards.forEach((card) => this.onDeselectCard({card: card}));
		this.communityCards.forEach((card) => this.onDeselectCard({card: card}));
		this.drawer.open = false;
	}

	onChangeNumPlayers(params){
		this.numPlayers = params.numPlayers;
		this.drawer.open = false;
	}

}

export default alt.createStore(ApplicationStore, "ApplicationStore");