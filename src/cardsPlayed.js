import React, {Component} from 'react';
import AceOfDiamonds from './img/AceOfDiamonds.png';

class CardsPlayed extends Component {

    render() {
        return(
            <div className="cardsPlayed">
                Cards Played
                <br></br>
                Last Card: {  }
                <img src={AceOfDiamonds} alt={"img unavailable"} />
            </div>
        )
    } 
    

}

export default CardsPlayed;