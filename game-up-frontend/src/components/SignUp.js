import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
export default class SignUp extends Component { 
    state={ 
        name: '', 
        profile: '', 
        redirect: false 
    }
    handleChange =(event) => { 
        // I put ids on the inputs so i could grab the values and set the state in a dynamic manner. 
        let id = event.target.id
        let value = event.target.value
        this.setState({[id]: value })
    }

addUser = e => { 
    
e.preventDefault()
        // I destructred the states to pass so that it looks cleaner
this.state.name !== ''? this.addUsertoDatabase(e): alert("You must have a username!")

            
     //little validation so the username can not be empty 
}

addUsertoDatabase = (e) => { 
            // I destructred the states to pass so that it looks cleaner

    const{name, profile} = this.state

    fetch('http://localhost:3000/users',{ 
        method: "POST", 
        headers: {"Content-Type" : 
                  "application/json",
                  Accept:"application/json"}, 
        body: JSON.stringify({ name:`${name}`, profile:`${profile}`})
    })
    .then(res => res.json())
    .then(user => {
        this.setState({redirect: true})
        this.props.handleUser(user)} 
        
        )
    
    
    // .catch(error => console.log('An error occured', error))
}
    render(){ 
        if(this.state.redirect){ 
            return <Redirect to="/profile"/>
        }
        return(
            <div>
                <div class="row d-flex justify-content-center">
                    <h3 class="mb-3 pt-3 font-weight-bold">Create Your Account</h3>
                </div>

                <form>
                    <div className="form-group">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="UserName..."
                            value={this.state.name}
                            id="name"
                            onChange={(event) =>this.handleChange(event)}
                        />
                        <textarea
                            className="form-control"
                            type="text"
                            placeholder="Profile"
                            id="profile"
                            value={this.state.profile}
                            onChange={this.handleChange}
                        />
                        
                        <button
                            type="submit"
                            className="btn btn-primary mb-2"
                            onClick={(event) => this.addUser(event)}>
                                Submit
                        </button>
                       
                    </div>
                </form>

                
            </div>
        )
    }
}