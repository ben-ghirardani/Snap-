import React, {Component} from 'react';

class WinnerMessage extends Component {
    
    render() {
        return(
            <div className="winner-message">
                {this.props.winner}
            </div>
        )
    }

}

export default WinnerMessage;