import React, { Component } from 'react';
import { setCities } from '../actions/index';

import City from './city';


class CityList extends Component {

    componentWillMount() {
        this.props.setCities();
    }

    render() {
        return (
            <div className="cities">
                {this.props.cities.map((city) => <City name={city.name} key={city.name} />)}
            </div>
        );
    }

}



export default CityList;