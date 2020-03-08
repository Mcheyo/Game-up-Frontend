import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Games extends Component { 
    render(){ 
        const {name, background_image} = this.props.game
        return(
            <div className="col-lg-4 py-2">
            <Link to={`/games/${this.props.game.id}`}>
                <div className="card text-center zoom" >
                    <img className="card-img-top" src={background_image} alt={`${name} Video Game Poster`}/>
                    <div className="card-body">
                        <h5 className="card-title">{name} </h5>
                    </div>
                </div>
                </Link>
            </div>
        )
    }
}