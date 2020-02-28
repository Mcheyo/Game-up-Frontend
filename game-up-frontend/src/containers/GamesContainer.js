import React, { Component } from 'react'
import GameSpecs from '../components/Games'
export default class Games extends Component { 
    render(){ 
        return(
            <div
            className="ui four cards ">
                 { 
                this.props.gamesArray.map(game => <GameSpecs key={game.name} game={game} />)}
            </div>
        )
    }
}