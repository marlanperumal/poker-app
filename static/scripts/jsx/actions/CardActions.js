import alt from '../alt'

class CardActions {
	selectCard(params){
		return params;
	}

	deselectCard(params){
		return params;
	}

	closeCardSelector(params){
		return params;
	}

	changeRank(params){
		return params;
	}

	changeSuit(params){
		return params;
	}

	updateResults(params){
		return params;
	}

	runSim(params){
		var holeCards = params.holeCards.map(function(card){
			if (card.revealed){
				return [card.rank, card.suit];
			}
		});
		var communityCards = params.communityCards.map(function(card){
			if (card.revealed){
				return [card.rank, card.suit];
			}
		});
		holeCards = holeCards.filter(function(card){
			return card !== undefined;
		});
		communityCards = communityCards.filter(function(card){
			return card !== undefined;
		});
		var req = {
			hole_cards: holeCards,
			community_cards: communityCards,
			num_players: params.numPlayers
		}
		var self = this;
		fetch("/api/handprob",
		{
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify(req)
		})
		.then(function(res){return res.json()})
		.then(function(j){
			self.updateResults(j);
		})
		.catch(function(res){ console.log(res)})
		return {};
	}
}

export default alt.createActions(CardActions);