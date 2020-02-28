import React, { Component } from 'react';
import './App.css';
import GamesContainer from './containers/GamesContainer'
import GameSpecs from './components/GamesSpecs'
import NavBar from './components/NavBar';

class App extends Component {
  state ={
    gamesArray: [],
    displayedGame: null,
    searchTerm: ""
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

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value.toLowerCase()})
  }

  render() {
    let filteredGames = this.state.gamesArray.filter(game => game.name.toLowerCase().includes(this.state.searchTerm)) 
  return (
   <div>
     <NavBar handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
     {this.state.displayedGame?
      <GameSpecs game={this.state.displayedGame} /> :
      <GamesContainer gamesArray={filteredGames} displayGame={this.displayGame}/> 
    }
   </div>
  
  );
  }
}

export default App;
