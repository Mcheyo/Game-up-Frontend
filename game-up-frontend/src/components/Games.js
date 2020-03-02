

import React, { Component } from 'react'

export default class GameSpecs extends Component { 
    render(){ 
        const {name, background_image, rating} = this.props.game
        return(
            <div className="col-lg-4 py-2">
                <div className="card text-center zoom" onClick={() => this.props.displayGame(this.props.game)}>
                    <img className="card-img-top" src={background_image} alt={`${name} Video Game Poster`}/>
                    <div className="card-body">
                        <h5 className="card-title">{name} </h5>
                    </div>
                </div>
            </div>
        )
    }
}