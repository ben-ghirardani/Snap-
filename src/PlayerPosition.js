import React, { Component } from 'react';

class PlayerPosition extends Component {

    render() {
        return (
            <div className="player-container">
                <header className="player-header">Your Deck</header>
                <img className="player-deck-top" src={this.props.playerDeckTop} alt="Top of player's deck"/>
                <div className="cards-remaining"> {this.props.playerDeck.length} </div>
                {/* button transparent and sits over player deck */}
                <button className="playCard" onClick={this.props.playCard}></button>
            </div>
        );
    }
}

export default PlayerPosition;