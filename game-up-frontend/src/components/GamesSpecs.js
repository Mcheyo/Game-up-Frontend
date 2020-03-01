import React, { Component } from 'react'


export default class GameSpecs extends Component { 
    render(){ 
        let {name, released, background_image, rating, metacritic, playtime, clip} = this.props.game
        return(
            <div>
                <div className="">
                    <div className="row">
                        <div className="col-lg">
                        <div className="gameName">{name}</div>
                        <div className="embed-responsive embed-responsive-21by9">
                            <iframe className="embed-responsive-item" width="320" height="240" src={`${clip}`} frameBorder="0" allowFullScreen>
                            </iframe>
                        </div></div>

                        <div className="col-lg">
                        <div className="gameImage">
                            <img class="img-responsive fit-image" src={`${background_image}`}/>
                        </div></div></div>

                        <div className="row">
                        <div className="col-lg">
                            <div className="userReviews">User Reviews{}</div>
                        </div>

                        <div className="col-lg">
                            <div className="gameRatings">Rating: {rating} </div>
                            <div className="gameReleased">Released: {released}</div>
                            <div className="gamePlaytime">Playtime: {playtime}</div>
                            <div className="gameMetacrtic">Metacrtic Rating: {metacritic}</div>
                        </div>
                        </div>

                    
                </div>
            
            </div>
        )
    }
}
