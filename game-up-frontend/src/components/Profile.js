import React, { Component } from 'react'

class Profile extends Component {
    state={ 
        myGames : []
    }

    // componentDidMount(){

    // }


    render(){ 
     
        return( 
            <div className="col-lg-4 py-2">
            
                <div className="card text-center zoom" >
                  
                    <div className="card-body">
                        <h5 className="card-title">{this.props.user.name} </h5>
                        <p> Games I Like:</p>
                        <p> </p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Profile 

