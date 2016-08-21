import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green500, green800, redA400, grey800} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import HardwareComputer from 'material-ui/svg-icons/hardware/computer';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green500,
        accent1Color: green800,
    }
});

const styles = {
    card_row:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    card_slot:{
        flex: 1,
    },
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
    chip: {
        margin: 10
    },
    fab: {

    },
    suit_avatar: {
        margin: 5,
        fontSize: 20
    },
    red_suit: {
        color: redA400
    },
    black_suit: {
        color: grey800
    }
};

class App extends Component{
    constructor(props, context){
        super(props, context);
        this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
        this.state = {
            drawerOpen: false
        }
    }

    handleToggleDrawer() {
        this.setState({
            drawerOpen: !this.state.drawerOpen,
        });
    }

    handleCloseDrawer() {
        this.setState({
            drawerOpen: false,
        });
    }

    render(){
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="Poker Simulator" onLeftIconButtonTouchTap={this.handleToggleDrawer}/>
                    <Drawer
                        open={this.state.drawerOpen}
                        docked={false}
                        onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
                    >
                        <MenuItem>Item 1</MenuItem>
                        <MenuItem>Item 2</MenuItem>
                    </Drawer>
                    <div style={styles.card_row}>
                        <div style={styles.card_slot}>
                            <Paper style={styles.card} zDepth={0}>
                                <Chip style={styles.chip}>4 Players</Chip>
                                <Chip style={styles.chip}>Win%: 43</Chip>
                                <Chip style={styles.chip}>RHS: 2.14</Chip>
                            </Paper>
                        </div>
                        <div style={styles.card_slot}>
                            <Paper style={styles.card} zDepth={2}>
                                <div style={styles.card_contents}>
                                    <span style={styles.black_suit}>A&spades;</span>
                                </div>
                            </Paper>
                        </div>
                        <div style={styles.card_slot}>
                            <Paper style={styles.card} zDepth={2}>
                                <div style={styles.card_contents}>
                                    <span style={styles.red_suit}>7&hearts;</span>
                                </div>
                            </Paper>
                        </div>
                    </div>
                    <Divider/>

                    <div style={styles.card_row}>
                        <div style={styles.card_slot}>
                            <Paper style={styles.card} zDepth={2}>
                                <div style={styles.card_contents}>
                                    <span style={styles.black_suit}>7&spades;</span>
                                </div>
                            </Paper>
                        </div>
                        <div style={styles.card_slot}>
                            <Paper style={styles.card} zDepth={2}>
                                <div style={styles.card_contents}>
                                    <span style={styles.red_suit}>2&diams;</span>
                                </div>
                            </Paper>
                        </div>
                        <div style={styles.card_slot}>
                            <Paper style={styles.card} zDepth={2}>
                                <div style={styles.card_contents}>
                                    <span style={styles.black_suit}>J&spades;</span>
                                </div>
                            </Paper>
                        </div>
                    </div>

                    <div style={styles.card_row}>
                        <div style={styles.card_slot}>
                            <Paper style={styles.card} zDepth={2}>
                                <div style={styles.card_contents}>
                                    <span style={styles.black_suit}>J&clubs;</span>
                                </div>
                            </Paper>
                        </div>
                        <div style={styles.card_slot}>
                            <Paper style={styles.card} zDepth={2}>
                                <div style={styles.card_contents}>
                                    <span style={styles.red_suit}>Q&hearts;</span>
                                </div>
                            </Paper>
                        </div>
                        <div style={styles.card_slot}>
                            <Paper style={styles.card} zDepth={0}>
                                <div style={styles.card_contents}>
                                    <FloatingActionButton style={styles.fab} size={50}>
                                        <HardwareComputer />
                                    </FloatingActionButton>
                                </div>

                            </Paper>

                        </div>
                    </div>


                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;