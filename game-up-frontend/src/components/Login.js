import React, { Component } from "react"
import {withRouter} from "react-router-dom"
import {Button, Form} from "react-bootstrap"
import {Link} from "react-router-dom"

class LoginForm extends Component{ 
    state={ 
        name: "", 
        password: ""
    }


    handleChange = (e) => { 
    let id = e.target.name
    let value = e.target.value
        this.setState({[id]: value})
    }


    handleLoginSubmit = (e) => { 
        e.preventDefault()
        let params = this.state
        fetch('http://localhost:3000/login', { 
            method:"POST", 
            headers: { 
                "Content-Type" :"application/json", 
                "Accept": "applicaiton/json"
            },
            body: JSON.stringify({
                name: params.name, password:params.password
            })    
        })
        .then(res => res.json())
        .then(user => {
            debugger
            if(user.message){ 
                alert(user.message)
            }
            else{ 
                localStorage.setItem("jwt", user.token)
                 this.props.handleUser(user.data) 
            }
        })
    }

    render(){ 
        return(
            <Form onSubmit={this.handleLoginSubmit}>
            <Form.Group controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username"
               placeholder="Enter username"  
               name="name"
               onChange={(event) => this.handleChange(event)}
               />
              
              <Form.Control
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={(event) => this.handleChange(event)}
              value={this.state.password}
            />
              <Form.Text className="text">
                  Not a Member? <Link to='/sign-up'>
                  Sign up here
                      </Link>
              </Form.Text>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Form.Group>
          </Form>
        )
    }
}

export default withRouter(LoginForm)