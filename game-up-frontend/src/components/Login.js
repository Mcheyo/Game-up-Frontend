import React, { Component } from "react"
import {withRouter} from "react-router-dom"
import {Button, Form} from "react-bootstrap"
import {Link} from "react-router-dom"

class LoginForm extends Component{ 
    state={ 
        name: ""
    }


    handleChange = (e) => { 
    
        this.setState({name: e.target.value})
    }


    handleLoginSubmit = (e) => { 
        e.preventDefault()
        let params = this.state.name
        fetch('http://localhost:3000/login', { 
            method:"POST", 
            headers: { 
                "Content-Type" :"application/json", 
                "Accept": "applicaiton/json"
            },
            body: JSON.stringify({
                name: params
            })    
        })
        .then(res => res.json())
        .then(user => {
            if(user.message){ 
                alert(user.message)
            }
            else{ 
            this.props.handleUser(user) 
            }
        })
    }

    render(){ 
        return(
            <Form onSubmit={this.handleLoginSubmit}>
            <Form.Group controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username"  onChange={this.handleChange}/>
              <Form.Text className="text">
                  Not a Member? <Link to='/sign-up'>
                  Sign up here
                      </Link>
              </Form.Text>
            </Form.Group>
          
          
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )
    }
}

export default withRouter(LoginForm)