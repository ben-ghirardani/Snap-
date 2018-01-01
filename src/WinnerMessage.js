import React, {Component} from 'react';

class WinnerMessage extends Component {
    
    render() {
        return(
            <div>
                {this.props.winner}
            </div>
        )
    }

}

export default WinnerMessage;