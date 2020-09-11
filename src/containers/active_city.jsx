import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ActiveCity extends Component {
    render() {
    
        if(!this.props.activeCity) {
            return (
                <div className="active-city">
                    <p>Select a city from the list</p>
                </div>
            );
        }

        const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;

        return (
            <div className="active-city">
                <h3>{this.props.activeCity.name}</h3>
                <p>{this.props.activeCity.address}</p>
                <img src={src} alt=""/>
            </div>
        );
    }
}

function mapReduxStateToProps(reduxState) {
    return {
        activeCity: reduxState.activeCity
    }
}

export default connect(mapReduxStateToProps)(ActiveCity);