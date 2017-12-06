import React, { Component } from 'react';

class PlayerPosition extends Component {

    // a method to check the length of the array being passed down as props

    render() {
        return (
            <div className="player-container">
            Player Container
            <br></br>
            <div> Cards Remaining: {this.props.playerDeck.length} </div>
            </div>
        );
    }

}

export default PlayerPosition;