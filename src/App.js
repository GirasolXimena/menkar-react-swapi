import React, { Component } from 'react';
import Header from './Header/Header'
import PlanetList from './PlanetList/PlanetList'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetList: []
    }
  }
  
  componentDidMount() {
    console.log('App component mounted');
    const url = 'https://swapi.co/api/planets/?format=json'
      this.getPlanets(url);
      
    }



async getPlanets(url) {
  axios.get(url)
    let nextUrl = url;
    while (nextUrl != null) {
      await axios.get(nextUrl)
      .then((response) => {
          console.log(response.data);
          
        this.setState({planetList: [...this.state.planetList, ...response.data.results]});
        console.log(response.data);
        nextUrl = response.data.next
        console.log(nextUrl);
      })
    .catch((error) => {
      console.log('the error', error);
      nextUrl = null;
  })
}}


  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <Header />
        <PlanetList planetList={this.state.planetList} />
      </div>
    );
  }
}

export default App;
