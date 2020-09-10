import React, { Component } from 'react';

class City extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }

}

export default City;