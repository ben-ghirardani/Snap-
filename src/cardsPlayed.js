import React, {Component} from 'react';

class CardsPlayed extends Component {

    render() {
        return(
            <div className="cardsPlayed">
                Cards Played
                <br></br>
                <img src={this.props.cardsPlayedLastCard[0].img} alt={"img unavailable"} />
            </div>
        )
    } 
    

}

export default CardsPlayed;