import React, { Component } from 'react'
import {Container, Row, Col, Card } from 'react-bootstrap'
import Game from './Games'

class Profile extends Component {
    render(){ 
        return(             
            <Container>
                <Row>         
                    <Col>    
                        <div className="card text-center" >
                            <div className="card-body">
                                <h5 className="card-title">MY GAMES </h5>
                                    <p> Games I Like:</p>
                                    {
                                    this.props.myGames.length < 1 ? 'GO like some Games!' :
                                    this.props.myGames.map(game => <Game key={game.name}  game={game} />)
                                    }
                            </div>
                        </div>  
                    </Col>

                    <Col>
                        <div className="card text-center" >
                            <div className="card-body">
                            <h3 className="card-title">{this.props.user.name} </h3>
                                <h5> About :</h5>
                                <p>
                                    {this.props.user.profile}
                                </p>
                            </div>
                        </div>  
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profile 

