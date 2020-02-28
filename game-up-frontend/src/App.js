import React, { Component } from 'react';
import './App.css';
import Games from './containers/GamesContainer'

class App extends Component {
  state ={
    gamesArray: []
  }

  componentDidMount(){ 
    fetch('http://localhost:3000/games')
    .then( res => res.json())
    .then(games => this.setState({gamesArray: games}))
  }
  render() { 
  return (
   <div>
     <Games gamesArray={this.state.gamesArray}/>
   </div>
  
  );
  }
}

export default App;
