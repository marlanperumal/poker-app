# Poker App

## Requirements

* [Python 3.5.x](https://www.python.org/downloads/)
* [Node 5.1.0+](https://nodejs.org/en/)

One those are installed, you will need to install [Flask](http://flask.pocoo.org/docs/0.11/installation/#installation). This can be done via the commandline by entering `sudo pip install Flask`.

Lastly, you will need to the [Poker Simulator](https://github.com/marlanperumal/poker-simulator) module. Make sure that you place this in a directory called `poker_simulator` (with an underscore), since, by default this will be cloned by git into a `poker-simulator` directory. The root folder that contains this module must be placed into your `PYTHONPATH` environment variable.

## Usage

Two scripts have been provided to provide easy execution:

* `pokerapp.sh`
* `pokerapp-debug.sh`

On Linux / BSD systems, simply executing these in a console should work. On windows, use: 

`> sh pokerapp.sh`

Once this is running, open a web browsers, and head to `localhost:5000`.