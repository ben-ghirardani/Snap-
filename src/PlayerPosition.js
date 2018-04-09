import React, { Component } from 'react';

class PlayerPosition extends Component {

    render() {
        return (
            <div className="player-container">
                Your Deck
                <br></br>
                <img className="player-deck-top" src={this.props.playerDeckTop} alt="Top of player's deck"/>
                <br></br>
                <div> Cards Remaining: {this.props.playerDeck.length} </div>
                <button className="playCard" onClick={this.props.playCard}>Play a card</button>
            </div>
        );
    }
}

export default PlayerPosition;