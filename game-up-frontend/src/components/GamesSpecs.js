import React, { Component } from 'react'


export default class GameSpecs extends Component { 
<<<<<<< HEAD
   
    render(){ 
    
        // let {name, released, background_image, rating, metacritic, playtime, clip} = this.props.game
=======

    constructor(){
        super()
        this.state ={
            liked: false
        }
    }

    handleClick = () => {
        let gameId = this.props.game.id
        let userId = this.props.user.id
        let userLike = !this.state.liked
        let likeInfo = {game_id: gameId, user_id: userId, like: userLike, favorited: false}
        fetch('http://localhost:3000/user_games',{ 
            method: "POST", 
            headers: {"Content-Type" : 
                      "application/json",
                      Accept:"application/json"}, 
            body: JSON.stringify(likeInfo)
        })
        .then(res => res.json())
        .then(info => {console.log(info)
        this.setState({ liked: userLike})
        })
    }



    render(){  
           
      // let {name, released, background_image, rating, metacritic, playtime, clip} = this.props.game
>>>>>>> ec21a5a3e92a1789cecac03f80ee11c3aa39fa1c
        return(
            <div >
                <div className=""  >
                    <h1 className="gameName">{this.props.game.name}</h1>
                    
                    {/* <div className="row">

                        <div className="col-lg"> */}
                        <div className="gameImage">
                            <img class="img-responsive fit-image" src={`${this.props.game.background_image}`}/>
                    {/* </div></div> */}
                    
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg">
                            {this.props.game.clip? 
                            <div className="embed-responsive embed-responsive-21by9">
                                <iframe className="embed-responsive-item" width="320" height="240" src={`${this.props.game.clip}`} frameBorder="0" allowFullScreen>
                                </iframe>
                            </div>
                            : <div>:(</div>
                           }

                            <div className="user-reviews">
                                <div className="userReviews">User Reviews{}</div>
                                </div>

                                <div className="gameRatings">Rating: {this.props.game.rating} </div>
                                <div className="gameReleased">Released: {this.props.game.released}</div>
                                <div className="gamePlaytime">Playtime: {this.props.game.playtime}</div>
                                <div className="gameMetacrtic">Metacrtic Rating: {this.props.game.metacritic}</div>
                                {this.props.user !== null ? (
                                    this.state.liked ?
                                        <button onClick={this.handleClick}>Dislike</button>:
                                        <button onClick={this.handleClick}>Like</button> ) : (<></>)
                                }
                                
                        </div>

                        <div className="col-lg">
                            <div className="suggested-game">
                                <h4>If you like {this.props.game.name}, you may also like:</h4>
                                <p>{this.props.game.suggested_name}</p>
                                <p>{this.props.game.suggested_description}</p>
                                <img className="fit-image" alt="suggested-game" src={this.props.game.suggested_background_image}></img>
                            </div>
                        </div>

                    </div>
                    </div>

                    
                </div>
            
            </div>
        )
    }
}
