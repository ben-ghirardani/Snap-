import React, {Component} from 'react';

class OpponentPosition extends Component {

    // a method to count the length of the deck of cards array and display it in the component. 

    render() {
        return(
            <div className="opponent-container">
                Opponent Deck
                <br></br>
                <div>Cards Remaining: {this.props.opponentDeck.length} </div>
                <img src={this.props.opponentDeckTop} />
            </div>
        );
    }

}

export default OpponentPosition;