import React, { Component } from 'react';
import './App.css';
import GamesContainer from './containers/GamesContainer'
import GameSpecs from './components/GamesSpecs'
import NavBar from './components/NavBar';
import SignUp from './components/SignUp'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
class App extends Component {
  state ={
    gamesArray: [],
    displayedGame: null,
    searchTerm: "", 
    userPage: false, 
    loading: true, 
    user: null

  }

  componentDidMount(){ 
    fetch('http://localhost:3000/games')
    .then( res => res.json())
    .then(games => this.setState({gamesArray: games, loading: false}))
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

  handleUser = user => { 
    this.setState({user: user })
  }

  render() {
    let filteredGames = this.state.gamesArray.filter(game => game.name.toLowerCase().includes(this.state.searchTerm)) 
    let renderGames= this.state.displayedGame?
      <GameSpecs game={this.state.displayedGame} /> :
      <GamesContainer gamesArray={filteredGames} displayGame={this.displayGame}/>
  return (
    <div>
      {!this.state.loading?
      <Router>
      <NavBar handleChange={this.handleChange} searchTerm={this.state.searchTerm}  handleSignUp={this.handleSignUp} />
        <Route  path="/games/:id" render={(props) => { 

          let id=parseInt(props.match.params.id)
       
          let gameShow = this.state.gamesArray.find(game => game.id === id)
          
          return  <GameSpecs game={gameShow}  /> 
          }} />
        <Route exact path ="/games" render={ () => <GamesContainer gamesArray={filteredGames} />} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path ='/' render={() => <Home testGames={this.state.gamesArray} />} />
        <Route exact path ='/login' render={() => <Login handleUser={this.handleUser}/>} />
        <Footer/>
      </Router>
      : <img src='https://cdn.dribbble.com/users/830587/screenshots/4381223/loader_gif.gif'/>}
    </div>
  )}
}

export default App;
