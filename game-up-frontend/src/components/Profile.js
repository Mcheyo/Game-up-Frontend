import React, { Component } from 'react'

class Profile extends Component {
    // state={ 
    //     myGames : []
    // }

 

    render(){ 
    
        return( 
            <div className="col-lg-4 py-2">
            
                <div className="card text-center zoom" >
                  
                    <div className="card-body">
                        <h5 className="card-title">{this.props.user.name} </h5>
                        <p> Games I Like:</p>
                        {
                            this.props.myGames.length < 1 ? 'GO like some Games!' :
                        this.props.myGames.map(game => game.name)
                        }
                    </div>

                </div>
                <div>
                    {
                        this.props.user.profile
                    }
                </div>
                
            </div>
        )
    }
}

export default Profile 

