import React, {Component} from 'react';

class OpponentPosition extends Component {

    render() {
        return(
            <div className="opponent-container">
                Opponent Deck
                <br></br>
                <img className="opponent-deck-top" src={this.props.opponentDeckTop} />
                <br></br>
                <div>Cards Remaining: {this.props.opponentDeck.length} </div>
            </div>
        );
    }

}

export default OpponentPosition;