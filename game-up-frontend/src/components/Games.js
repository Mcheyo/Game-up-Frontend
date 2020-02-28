

import React, { Component } from 'react'

export default class GameSpecs extends Component { 
    render(){ 
        const {name, background_image, rating} = this.props.game
        return(
            <div className="col-lg-3 py-3 embed-responsive 16by9">
                <div className="card card-body" onClick={() => this.props.displayGame(this.props.game)}>
                    <div className="card-img-top embed-responsive-item">
                        <img className="card-img-top embed-responsive-item" src={background_image}/></div>
                    <div className="card-title">{name} </div>
                </div>
            </div>
        )
    }
}