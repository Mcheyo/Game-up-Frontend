import React, { Component } from 'react'


export default class GameSpecs extends Component { 
    render(){ 
        let {name, released, background_image, rating, metacritic, playtime, clip} = this.props.game
        return(
            <div>
                <div className="pageContents">
                <div className="gameName">{name}</div>
                    <div className="embed-responsive 4by3">
                        <iframe width="320" height="240" src={`${clip}`} frameBorder="0">
                        </iframe> </div>
                    <div className="userReviews">{}</div>
                    <div className="gameImage">
                        <img class="img-responsive fit-image" src={`${background_image}`}/>
                    </div>
                    <div className="gameRatings">Rating: {rating}
                    <div className="gameReleased">Released: {released}</div>
                    <div className="gamePlaytime">Playtime: {playtime}</div>
                    <div className="gameMetacrtic">Metacrtic Rating: {metacritic}</div>
                    </div>
                </div>
            
            </div>
        )
    }
}