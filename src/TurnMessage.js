import React, {Component} from 'react';

class TurnMessage extends Component {

    render() {
        return(
            <div>
                {this.props.turn}
            </div>
        )
    }

}

export default TurnMessage;