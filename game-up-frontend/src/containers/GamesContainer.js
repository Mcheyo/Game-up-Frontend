import React, { Component } from 'react'
import Game from '../components/Games'

export default class Games extends Component { 
    render(){ 
        return(
             <div className="container">
            {/* <div className=""></div> */}
            <div className="row">
    
                    { 
                    this.props.gamesArray.map(game => <Game key={game.name}  displayGame={this.props.displayGame} game={game} />)}
              
                </div>
            </div>
        )
    }
}