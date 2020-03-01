import React, { Component } from 'react';
import './App.css';
import GamesContainer from './containers/GamesContainer'
import GameSpecs from './components/GamesSpecs'
import NavBar from './components/NavBar';
import User from './components/User'

class App extends Component {
  state ={
    gamesArray: [],
    displayedGame: null,
    searchTerm: "", 
    userPage: false 

  }

  componentDidMount(){ 
    fetch('http://localhost:3000/games')
    .then( res => res.json())
    .then(games => this.setState({gamesArray: games}))
  }

  displayGame = (game) => {
    this.setState({displayedGame: game})
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value.toLowerCase()})
  }

  handleSignUp = event => { 
    let userToggle = this.state.userPage
    this.setState({userPage: !userToggle})
  }

  render() {
    let filteredGames = this.state.gamesArray.filter(game => game.name.toLowerCase().includes(this.state.searchTerm)) 
    let renderGames= this.state.displayedGame?
      <GameSpecs game={this.state.displayedGame} /> :
      <GamesContainer gamesArray={filteredGames} displayGame={this.displayGame}/>
  return (
    <div>
      <NavBar handleChange={this.handleChange} searchTerm={this.state.searchTerm}  handleSignUp={this.handleSignUp}/>
      <div>
        { this.state.userPage? <User /> : renderGames }
      </div>
    </div>
  )}
}

export default App;
