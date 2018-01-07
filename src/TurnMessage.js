import React, {Component} from 'react';

class TurnMessage extends Component {

    render() {
        return(
            <div className="turn-message">
                {this.props.turn}
            </div>
        )
    }

}

export default TurnMessage;