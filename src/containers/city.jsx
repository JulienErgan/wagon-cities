import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import setActiveCity from '../actions/index';


class City extends Component {
    

    handleClick = () => {
        // debugger
        this.props.setActiveCity(this.props.city)
        // if (this.props.setActiveCity) {
        //     this.props.setActiveCity(this.props.city)
        // }
    }

    render() {
        return (
            <li className="list-group-item" onClick={this.handleClick}>
                {this.props.city.name}
            </li>
        );
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { setActiveCity: setActiveCity },
        dispatch
    );
}

// function mapReduxStateToProps(reduxState) {
//     return {
//         city: reduxState.city
//     };
// }

// export default connect(mapReduxStateToProps, mapDispatchToProps)(City);
export default connect(null, mapDispatchToProps)(City);
