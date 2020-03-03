import React, { Component } from 'react'

const Profile = props => {
     
        return( 
            <div className="col-lg-4 py-2">
            
                <div className="card text-center zoom" >
                  
                    <div className="card-body">
                        <h5 className="card-title">{props.user.name} </h5>
                    </div>
                </div>
                
            </div>
        )
}

export default Profile 

