import React, { Component } from "react";

class Planet extends Component {
    render() {
        return (
            <li key={this.props.planet.url}> {this.props.planet.name} has a climate of: {this.props.planet.climate}</li>
        )
    }
}



export default Planet;