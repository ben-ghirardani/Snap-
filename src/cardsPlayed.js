import React, {Component} from 'react';

class CardsPlayed extends Component {

    render() {
        return(
            <div className={this.props.cardsPlayedVisible? 'cards-played-visible':'cards-played-not-visible'} >
                <img className="card" src={this.props.cardsPlayedLastCard[0].img} alt={"img unavailable"} />
            </div>
        )
    } 
    
}

export default CardsPlayed;