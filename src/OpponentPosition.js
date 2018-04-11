import React, {Component} from 'react';

class OpponentPosition extends Component {

    render() {
        return(
            <div className="opponent-container">
                <header className="opponent-header">Opponent Deck</header>
                <img className="opponent-deck-top" src={this.props.opponentDeckTop} alt="Top of opponent's deck"/>
                <div className="opponent-cards-remaining"> {this.props.opponentDeck.length} </div>
            </div>
        );
    }

}

export default OpponentPosition;