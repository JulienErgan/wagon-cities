import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions/index';

import City from './city';


class CityList extends Component {

    componentWillMount() {
        this.props.setCities();
    }

    render() {
        return (
            <div className="cities">
                <ul className="list-group-items">
                    {this.props.cities.map((city) => <City city={city} key={city.name} />)}
                </ul>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { setCities: setCities },
        dispatch
    );
}

function mapReduxStateToProps(reduxState) {
    return {
        cities: reduxState.cities
    };
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);