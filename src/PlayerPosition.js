import React, { Component } from 'react';

class PlayerPosition extends Component {

    render() {
        return (
            <div className="player-container">
            Your Deck
            <br></br>
            <div> Cards Remaining: {this.props.playerDeck.length} </div>
            <br></br>
            <button className="playCard" onClick={this.props.playCard}>Play a card</button>
            </div>
        );
    }

}

export default PlayerPosition;