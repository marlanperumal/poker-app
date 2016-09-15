import alt from '../alt';
import CardActions from '../actions/CardActions';
import AppActions from '../actions/AppActions';

class ApplicationStore {
	constructor(){
		this.player = {
			name: undefined,
		};
		this.nameInput = {
			open: false,
			name: undefined
		}
		this.holeCards = [];
		this.communityCards = [];
		this.numPlayers = 5;
		this.drawer = {
			open: false
		}
		this.cardSelector = {
			card: undefined,
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
			onOpenCardSelector: CardActions.openCardSelector,
			onCloseCardSelector: CardActions.closeCardSelector,
			onRunSim: AppActions.runSim,
			onUpdateResults: AppActions.updateResults,
			onToggleDrawer: AppActions.toggleDrawer,
			onClearHand: AppActions.clearHand,
			onChangeNumPlayers: AppActions.changeNumPlayers,
			onChangeName: AppActions.changeName,
			onCloseNameInput: AppActions.closeNameInput,
			onOpenNameInput: AppActions.openNameInput
		});
	}

	onDeselectCard(params){
		params.card.revealed = false;
		params.card.rank = undefined;
		params.card.suit = undefined;
	}

	onSelectCard(params){
		params.card.rank = params.rank;
		params.card.suit = params.suit;
		params.card.revealed = true;
		this.cardSelector.open = false;
	}

	onOpenCardSelector(params){
		this.cardSelector.card = params.card;
		this.cardSelector.open = true;
	}

	onCloseCardSelector(params){
		params.cardSelector.card = undefined;
		params.cardSelector.open = false;
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

	onChangeName(params){
		if (params.name.length > 0){
			this.player.name = params.name;
			this.nameInput.open = false;	
		}
		else{
			this.nameInput.error = "Name cannot be blank";
		}
		
	}

	onCloseNameInput(params){
		this.nameInput.open = false;
		this.nameInput.error = undefined;
	}

	onOpenNameInput(params){
		this.nameInput.open = true;
		this.nameInput.error = undefined;
	}

}

export default alt.createStore(ApplicationStore, "ApplicationStore");