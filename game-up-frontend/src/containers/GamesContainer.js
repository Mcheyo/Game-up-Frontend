import React, { Component } from 'react'
import Game from '../components/Games'
// import InfiniteScroll from 'react-infinite-scroller'
import InfiniteScroll from 'react-infinite-scroll-component'
export default class GamesContainer extends Component { 
    state ={ 
        index: 9
    }
    addMore = () => { 
        this.setState({index: this.state.index + 9 })
    }
    render(){ 
    
        return(
            <div className="container">
                <InfiniteScroll
                dataLength={this.state.index}
                next={this.addMore}
                hasMore={this.state.index < this.props.gamesArray.length}
                endMessage="No more Games"
                >
                <div className="row">
                    <div className="card-deck">
                    {this.props.gamesArray.slice(0,this.state.index).map(game => <Game location="container" key={game.name}  displayGame={this.props.displayGame} game={game} />)}
                    </div>
                </div>
                </InfiniteScroll>
            </div>
        )
    }
}