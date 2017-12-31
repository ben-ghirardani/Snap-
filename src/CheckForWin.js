import React, {Component} from 'react';

class CheckForWin extends Component {

    render() {
        return(
            <button onClick={this.props.checkForWin}>Snap?</button>
        )
    }

}

export default CheckForWin;