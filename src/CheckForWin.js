import React, {Component} from 'react';

class CheckForWin extends Component {

    render() {
        return(
            <div className="check-for-win">
                <button className="check-for-win-button" onClick={this.props.checkForWin}>Snap?</button>
            </div>
        )
    }
}

export default CheckForWin;