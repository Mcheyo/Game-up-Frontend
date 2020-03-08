import React, { Component } from 'react'
import Game from '../components/Games'
import InfiniteScroll from 'react-infinite-scroller'

export default class GamesContainer extends Component { 
    render(){ 
        return(
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                    {this.props.gamesArray.map(game => <Game location="container" key={game.name}  displayGame={this.props.displayGame} game={game} />)}
                    </div>
                </div>
            </div>
        )
    }
}