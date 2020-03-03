import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {

    render() {
        return (
            <div className="NavComponent">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    < div className="container-fluid">
                        <Link to={`/`}>
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">LOGO</a>
                        </div>
                        </Link>
                        <Link to={`/games`}>
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">GAMES</a>
                        </div>
                        </Link>

                        <form className="form-inline my-2 my-lg-0">
                            <input onChange={this.props.handleChange} value={this.props.searchTerm} type="search" className="form-control mr-sm-2" placeholder="Search"></input>
                        </form>

                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to={`/sign-up`}>
                                <button className="btn btn-info">
                                Sign Up
                            </button> 
                              </Link>

                            </li>
                            {this.props.handleLogin === null ?  
                            <Link to={`/login`}>
                            <li><a href="#"> Login</a></li>
                            </Link>
                            : 
                            <button onClick={this.props.handleLogout}>Logout</button>
                            }
                             
                        </ul> 
                         
                    </div>
                </nav>            
            </div>
        )
    }
}


