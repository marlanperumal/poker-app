import os
import poker_simulator as ps
from flask import Flask, request, jsonify, send_from_directory, render_template
import json
app = Flask(__name__)

short_code_dict = {
    "A": "Ace",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "T": "Ten",
    "J": "Jack",
    "Q": "Queen",
    "K": "King",
    "S": "Spades",
    "H": "Hearts",
    "D": "Diamonds",
    "C": "Clubs"
}


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/sandbox/")
def sandbox():
    return render_template("sandbox.html")


@app.route("/api/handprob/<short_code>")
def api_handprob_short_code(short_code):
    try:
        short_code = short_code.upper()
        num_players = 2
        if len(short_code) > 4:
            num_players = int(short_code[4:])
        rank_1 = short_code_dict[short_code[0]]
        suit_1 = short_code_dict[short_code[1]]
        rank_2 = short_code_dict[short_code[2]]
        suit_2 = short_code_dict[short_code[3]]
        resp = "Requesting Hand probabilities for {} of {} and {} of {} in a {} player game".format(rank_1, suit_1, rank_2, suit_2, num_players)
        card_1 = ps.Card(rank_1, suit_1)
        card_2 = ps.Card(rank_2, suit_2)
        sim = ps.HandProbability(num_players)
        record = sim.run([card_1, card_2])
        resp += json.dumps(record)
        return resp
    except Exception as inst:
        print(type(inst))
        print(inst)
    return "Error"


@app.route("/api/handprob", methods=["POST"])
def api_handprob():
    print(request.headers)
    if request.headers["Content-Type"] == "application/json":
        data = request.json
        num_players = None
        num_rounds = None
        hole_cards = None
        community_cards = None
        if "num_players" in data:
            num_players = int(data["num_players"])
        if "num_rounds" in data:
            num_rounds = int(data["num_rounds"])
        if "hole_cards" in data:
            hole_cards = [ps.Card(*card) for card in data["hole_cards"]]
        if "community_cards" in data:
            community_cards = [ps.Card(*card) for card in data["community_cards"]]
        sim = ps.HandProbability(num_players)
        record = sim.run(hole_cards, community_cards, num_rounds)
        resp = jsonify(record)
        resp.status_code = 200
        return resp
    else:
        return "415 Unsupported Media Type"

if __name__ == "__main__":
    app.run()
