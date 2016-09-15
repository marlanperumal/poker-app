# Poker App

## Requirements

* [Python 3.5.x](https://www.python.org/downloads/)
* [virtualenvwrapper 4.7.2+](https://pypi.python.org/pypi/virtualenvwrapper/)
* [Flask](http://flask.pocoo.org/docs/0.11/)
* [Node 5.1.0+](https://nodejs.org/en/)
* [webpack](https://webpack.github.io/)
* [Poker Simulator](https://github.com/marlanperumal/poker_simulator)

## Installation Instructions

These instructions assume you have python, virtualenvwrapper and node installed. Flask and webpack will be installed in the course of these instructions. The Poker Simulator project is used as an imported package. Whilst it is still in development, you probably want to keep it as an accessible project folder rather than getting it through `pip install`. Clone it from [Poker Simulator](https://github.com/marlanperumal/poker_simulator) and keep it updated through regular calls to `git pull`.

1. Navigate to the Poker App directory

        cd /path/to/poker_app

2. Create a new virtual environment 

		mkvirtualenv poker --python=python3

3. If your virtual environment is not immediately activated, enter it with 

		workon poker

4. Install required python packages 

		pip install -r requirements.txt

5. Add the directory containing your Poker Simulator package to the virtual environment path 

		add2virtualenv /path/to/packages 

	where the Poker Simulator package is located at `/path/to/packages/poker_simulator`

6. Install the required node modules 

		npm install

7. Compile the javascript 

		webpack

## Usage

Two scripts have been provided to provide easy execution:

* `pokerapp-debug.sh`
* `pokerapp.sh`

On Linux / BSD systems, simply executing these in a console should work. On windows, use: 

		sh pokerapp.sh

Once this is running, open a web browser, and head to `localhost:5000`.

### Development

Use `pokerapp-debug.sh` to run a development server that will reload whenever there is a change to the python webserver code. To have the javascript compile as you edit it, open another terminal and run

		webpack --watch

### On other devices

Use `pokerapp.sh` to run a webserver visible to other devices. You will still be able to run webpack watcher for live javascript editing as this does not affect the python server.

Some browsers, e.g. Chrome on mobile, will attempt to cache the js file on page load and will therefore not register any changes you make. To get around this, use Chrome's incognito mode. You will still need to close the browser window and reopen it if any code changes but at least you won't need to clear your cache every time.

## Cleaning up

1. Use `ctrl+c` to kill the webserver and webpack watcher in each of their terminal windows
2. Exit the virtual environment

		deactivate


