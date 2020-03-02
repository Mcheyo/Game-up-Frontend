import React, { Component } from 'react'

export default class User extends Component { 
    state={ 
        name: '', 
        profile: ''
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
 const{name, profile} = this.state
        this.state.name !== ''?
fetch('http://localhost:3000/users',{ 
    method: "POST", 
    headers: {"Content-Type": 
              "application/json",
              "Accept":"application/json"}, 
    body: JSON.stringify({ name, profile})
})
.then(res => res.json() )
.then(user => console.log(user) )  
            
    :alert("You must have a username!")
    //A little validation so the username can not be empty 
}
    render(){ 
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