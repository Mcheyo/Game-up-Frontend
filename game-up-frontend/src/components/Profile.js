import React, { Component } from 'react'

class Profile extends Component {
    state={ 
        myGames : []
    }

    componentDidMount(){
        let id = this.props.user.id
        fetch("http://localhost:3000/users/" + id)
        .then(res => res.json())
        .then(user => this.setState({myGames: user.games }))
    }

    render(){ 
    
        return( 
            <div className="col-lg-4 py-2">
            
                <div className="card text-center zoom" >
                  
                    <div className="card-body">
                        <h5 className="card-title">{this.props.user.name} </h5>
                        <p> Games I Like:</p>
                        {
                            this.state.myGames.length < 1 ? 'GO like some Games!' :
                        this.state.myGames.map(game => game.name)
                        }
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Profile 

