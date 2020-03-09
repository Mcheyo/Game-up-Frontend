import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { Button, Form, Card} from "react-bootstrap"
export default class SignUp extends Component { 
    state={ 
        name: '', 
        profile: '', 
        password: '',
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

    const{name, profile, password} = this.state

    fetch('http://localhost:3000/users',{ 
        method: "POST", 
        headers: {"Content-Type" : 
                  "application/json",
                  Accept:"application/json"}, 
        body: JSON.stringify({ name:`${name}`, profile:`${profile}`, password:`${password}`})
    })
    .then(res => res.json())
    .then(user => {
    
        if(user.message){ 
            user.message.forEach(mes => alert(mes))
        }
        else{ 
        this.setState({redirect: true})
        this.props.handleUser(user)} 
    } 
        
        )
    
    
    // .catch(error => console.log('An error occured', error))
}
    render(){ 
        if(this.state.redirect){ 
            return <Redirect to="/profile"/>
        }
        return(
            <div>
                <div className="form-group">
                <Card className="form-card">
                    <Card.Body>
                    <Card.Title as="h3"className="text-center">Create Your Account</Card.Title>
                        <Form>
                            <Form.Group controlId="Username">
                            <Form.Label>Username</Form.Label>
                            <input 
                                className="form-control"
                                type="text"
                                placeholder="UserName..."
                                value={this.state.name}
                                id="name"
                                onChange={(event) =>this.handleChange(event)}
                            />
                            <Form.Label>Password</Form.Label>
                            <input 
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                id="password"
                                onChange={(event) =>this.handleChange(event)}
                            />
                            <Form.Label>Profile</Form.Label>
                            <textarea
                                className="form-control"
                                type="text"
                                placeholder="Profile"
                                id="profile"
                                value={this.state.profile}
                                onChange={this.handleChange}
                            />
                            </Form.Group>
                            
                            <Form.Group>
                                <Button variant="primary" size="lg" block
                                    type="submit"
                                    onClick={(event) => this.addUser(event)}>
                                        Submit
                                </Button>
                            </Form.Group>
                        </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}