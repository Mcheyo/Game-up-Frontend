

import React, { Component } from 'react'

export default class GameSpecs extends Component { 
    render(){ 
        const {name, background_image, rating} = this.props.game
        return(
            <div
            className="ui card">
                <div className="image"><img src={background_image}/></div>
                <div className="extra">{name} </div>
            
                </div>
        )
    }
}