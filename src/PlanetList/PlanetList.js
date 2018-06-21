import React, { Component} from 'react';
import Planet from '../Planet/Planet'


class PlanetList extends Component {
    //This is similar to jQuery's onReady
//It is called by React when the component is loaded and ready to go!
    render() {
        return (
            <div> 
                <ul>
                    { this.props.planetList.map( planet => <Planet planet = {planet} />) }
                </ul>
            </div>
        )
    }
}

export default PlanetList;