import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green500, green800, redA400, grey800, blue500, redA700} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {ListItem} from 'material-ui/List';
import Popover from 'material-ui/Popover';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import HardwareComputer from 'material-ui/svg-icons/hardware/computer';
import PlayingCard from './PlayingCard';
import CardSelector from './CardSelector';
import ApplicationStore from '../stores/ApplicationStore';
import CardActions from '../actions/CardActions';
import AppActions from '../actions/AppActions';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        accent1Color: redA700,
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
};

class App extends Component{
    constructor(props, context){
        super(props, context);
        this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
        this.state = ApplicationStore.getState();
    }

    componentDidMount(){
        ApplicationStore.listen((state) => this.onChange(state));
    }

    componentWillUnmount(){
        ApplicationStore.unlisten((state) => this.onChange(state));
    }

    handleToggleDrawer() {
        AppActions.toggleDrawer({});
    }

    handleClearHand(){
        AppActions.clearHand({
            holeCards: this.state.holeCards, 
            communityCards: this.state.communityCards, 
            numPlayers: this.state.numPlayers
        });
    }

    handleChangeNumPlayers(value){
        AppActions.changeNumPlayers({
            holeCards: this.state.holeCards, 
            communityCards: this.state.communityCards, 
            numPlayers: value
        });
    }

    handleRunSim(){
        AppActions.runSim({
            holeCards: this.state.holeCards, 
            communityCards: this.state.communityCards, 
            numPlayers: this.state.numPlayers
        });
    }

    onChange(state){
        this.setState(state);
    }

    render(){
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="Poker Simulator" onLeftIconButtonTouchTap={this.handleToggleDrawer}/>
                    <Drawer 
                        open={this.state.drawer.open} 
                        docked={false}
                        onRequestChange={() => this.handleToggleDrawer()}
                    >
                        <ListItem 
                            leftAvatar={<Avatar>M</Avatar>}
                            primaryText="Marlan"
                            disabled={true}
                        />
                        <Divider/>
                        <Subheader>Current Hand</Subheader>
                        <MenuItem onTouchTap={() => this.handleClearHand()}>Clear Hand</MenuItem>
                        <DropDownMenu value={this.state.numPlayers} onChange={(event, index, value) => this.handleChangeNumPlayers(value)}>
                            <MenuItem value={6} primaryText="6 Players"/>
                            <MenuItem value={5} primaryText="5 Players"/>
                            <MenuItem value={4} primaryText="4 Players"/>
                            <MenuItem value={3} primaryText="3 Players"/>
                            <MenuItem value={2} primaryText="2 Players"/>
                        </DropDownMenu>
                        
                        <Divider/>
                        <Subheader>Profile</Subheader>
                        <ListItem>Change Name</ListItem>
                    </Drawer>
                    <CardSelector cardSelector={this.state.cardSelector} />
                    <div style={styles.card_row}>
                        <div style={styles.card_slot}>
                            <Paper style={styles.card} zDepth={0}>
                                <Chip style={styles.chip}>{this.state.numPlayers} Players</Chip>
                                <Chip style={styles.chip}>Win%: {(this.state.result.win_percent*100).toPrecision(2)}</Chip>
                                <Chip style={styles.chip}>RHS: {this.state.result.rhs.toFixed(2)}</Chip>
                            </Paper>
                        </div>
                        <div style={styles.card_slot}>
                            <PlayingCard card={this.state.holeCards[0]}/>
                        </div>
                        <div style={styles.card_slot}>
                            <PlayingCard card={this.state.holeCards[1]}/>
                        </div>
                    </div>
                    <Divider/>
                    

                    <div style={styles.card_row}>
                        <div style={styles.card_slot}>
                            <PlayingCard card={this.state.communityCards[0]}/>
                        </div>
                        <div style={styles.card_slot}>
                            <PlayingCard card={this.state.communityCards[1]}/>
                        </div>
                        <div style={styles.card_slot}>
                            <PlayingCard card={this.state.communityCards[2]}/>
                        </div>

                    </div>

                    <div style={styles.card_row}>
                        <div style={styles.card_slot}>
                            <PlayingCard card={this.state.communityCards[3]}/>
                        </div>
                        <div style={styles.card_slot}>
                            <PlayingCard card={this.state.communityCards[4]}/>
                        </div>
                        <div style={styles.card_slot}>
                            <Paper style={styles.card} zDepth={0}>
                                <div style={styles.card_contents}>
                                    <FloatingActionButton onTouchTap={() => this.handleRunSim()} style={styles.fab} size={50}>
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