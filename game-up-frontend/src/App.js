import React, { Component } from 'react';
import './App.css';
import GamesContainer from './containers/GamesContainer'
import GameSpecs from './components/GamesSpecs'

class App extends Component {
  state ={
    gamesArray: [],
    displayedGame: null
  }

  componentDidMount(){ 
    fetch('http://localhost:3000/games')
    .then( res => res.json())
    .then(games => this.setState({gamesArray: games}))
  }

  displayGame = (game) => {
    console.log(game)
    this.setState({displayedGame: game})
  }

  render() { 
  return (
   <div>
     {this.state.displayedGame?
      <GameSpecs game={this.state.displayedGame} /> :
      <GamesContainer gamesArray={this.state.gamesArray} displayGame={this.displayGame}/> 
    }
   </div>
  
  );
  }
}

export default App;
