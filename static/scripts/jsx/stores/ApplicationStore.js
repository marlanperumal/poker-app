import alt from '../alt';
import CardActions from '../actions/CardActions';

class ApplicationStore {
	constructor(){
		this.holeCards = [];
		this.communityCards = [];
		this.numPlayers = 5;
		this.result = {
			win_percent: 0.25,
			rhs: 1
		}

		for (var i = 0; i < 2; i++){
			this.holeCards.push({
				revealed: false,
				rank: undefined,
				suit: undefined,
				cardSelectorOpen: false,
			})
		}

		for (var i = 0; i < 5; i++){
			this.communityCards.push({
				revealed: false,
				rank: undefined,
				suit: undefined,
				cardSelectorOpen: false,
			})
		}
		this.bindListeners({
			onSelectCard: CardActions.selectCard,
			onDeselectCard: CardActions.deselectCard,
			onOpenCardSelector: CardActions.openCardSelector,
			onCloseCardSelector: CardActions.closeCardSelector,
			onChangeRank: CardActions.changeRank,
			onChangeSuit: CardActions.changeSuit,
			onRunSim: CardActions.runSim,
			onUpdateResults: CardActions.updateResults,
		});
	}

	onSelectCard(params){
		params.card.cardSelectorOpen = false;
		params.card.revealed = true;

	}

	onDeselectCard(params){
		params.card.revealed = false;
	}

	onOpenCardSelector(params){
		params.card.cardSelectorOpen = true;
	}

	onCloseCardSelector(params){
		params.card.cardSelectorOpen = false;
	}

	onChangeRank(params){
		params.card.rank = params.value;
	}

	onChangeSuit(params){
		params.card.suit = params.value;
	}

	onRunSim(params){

	}

	onUpdateResults(params){
		this.result.win_percent = params["win percentage"];
		this.result.rhs = params["relative hand strength"];
	}

}

export default alt.createStore(ApplicationStore, "ApplicationStore");