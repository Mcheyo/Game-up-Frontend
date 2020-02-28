import React, { Component } from 'react'


export default class GameSpecs extends Component { 
    render(){ 
        let {name, released, background_image, rating, metacritic, playtime, clip} = this.props.game
        return(
            <div>
                <div className="NavBar"></div>
                <div className="pageContents">
                <div className="gameName">{name}</div>
                    <div className="embed-responsive embed-responsive 4by3">
                        <iframe width="320" height="240" src={`${clip}`} frameBorder="0">
                        </iframe> </div>
                    <div className="userReviews">{}</div>
                    <div className="gameImage">
                        <img src={`${background_image}`}/>
                    </div>
                    <div className="gameRatings">{rating}
                    <div className="gameReleased">{released}</div>
                    <div className="gamePlaytime">{playtime}</div>
                    <div className="gameMetacrtic">{metacritic}</div>
                    </div>
                </div>
            
            </div>
        )
    }
}