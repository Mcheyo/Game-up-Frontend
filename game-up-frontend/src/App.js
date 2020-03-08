import React, { Component } from 'react';
import './App.css';
import GamesContainer from './containers/GamesContainer'
import GameSpecs from './components/GamesSpecs'
import NavBar from './components/NavBar';
import SignUp from './components/SignUp'
import {BrowserRouter as Router,Route, Switch, Redirect } from 'react-router-dom'
import {withRouter} from "react-router"
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Profile from './components/Profile'
class App extends Component {
  state ={
    gamesArray: [],
    displayedGame: null,
    searchTerm: "", 
    userPage: false, 
    loading: true, 
    user: null, 
    myGames: []

  }

  componentDidMount(){ 
    
    fetch('http://localhost:3000/games')
    .then( res => res.json())
    .then(games => this.setState({gamesArray: games, loading: false}))
    
    if(localStorage.getItem("jwt")){
      fetch('http://localhost:3000/login', {
        method: "GET",
        headers: {
          "Authentication" : localStorage.getItem("jwt"),
          "Accept" : "application/json"
        }
      })
      .then(res => res.json())
      .then(data =>  this.setState({user: data}) )
    }
    
   
  }
getUser = () => { 
  if(localStorage.getItem("jwt")){
    fetch('http://localhost:3000/api/v1/profile', {
      method: "GET",
      headers: {
        "Authentication" : localStorage.getItem("jwt"),
        "Accept" : "application/json"
      }
    }).then(res => res.json())
    .then(data => {
      this.setState({currentUser: data, loading: false})
    })
  }else{
    this.setState({loading: false})
  }
}
  displayGame = (game) => {
    this.setState({displayedGame: game})
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value.toLowerCase()})
  }

  handleSignUp = () => { 
    let userToggle = this.state.userPage
    this.setState({userPage: !userToggle})
  }

  handleUser = user => { 
    
    this.setState({user: user })
    let id = this.state.user.id
  fetch("http://localhost:3000/users/" + id)
  .then(res => res.json())
  .then(user => this.setState({myGames: user.games }))
  
  }

handleLogout = () => { 
  localStorage.removeItem("jwt")

  this.setState({user: null })
}

handleUpdatedLikes = user => { 
  if(this.state.myGames.length !== user.games.length){ 
    this.setState({myGames: user.games })
  }
}


  render() {
    
    let filteredGames = this.state.gamesArray.filter(game => game.name.toLowerCase().includes(this.state.searchTerm)) 
   
  return (
    <div>
      {!this.state.loading?
      <Router>
      <Route path='/' 
      render={(props) => <NavBar handleChange={this.handleChange} searchTerm={this.state.searchTerm}  handleSignUp={this.handleSignUp} handleLogin={this.state.user} handleLogout={this.handleLogout} props={props}/> } />
        <Route  path="/games/:id" render={(props) => { 

          let id=parseInt(props.match.params.id)
       
          let gameShow = this.state.gamesArray.find(game => game.id === id)
          
          return  <GameSpecs game={gameShow} user={this.state.user} myGames={this.state.myGames} handleUpdatedLikes={this.handleUpdatedLikes} /> 
          }} />
        <Route exact path ="/games" render={ () => <GamesContainer gamesArray={filteredGames} />} />
        <Route exact path="/sign-up" render={() => <SignUp handleUser={this.handleUser}/>} />
        <Route exact path ='/' render={() => <Home testGames={this.state.gamesArray} />} />
        <Route exact path ='/profile' render={() => { 
          return this.state.user? <Profile user={this.state.user} myGames={this.state.myGames} />: 
          <Redirect to='/login'/> 
          }} />
        <Route exact path ='/login' render={() => {
          return this.state.user? <Redirect to="/profile/"/>: 
        <Login handleUser={this.handleUser} />} }/>
        <Footer/>
      </Router>
      : <img src='https://cdn.dribbble.com/users/830587/screenshots/4381223/loader_gif.gif'/>}
    </div>
  )}
}

export default App ;
