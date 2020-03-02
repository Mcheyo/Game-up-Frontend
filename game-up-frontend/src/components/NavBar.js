import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="NavComponent">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    < div className="container-fluid">
                        <Link to={`/`}>
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">LOGO</a>
                        </div>
                        </Link>
                        <Link to={`/games`}>
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">GAMES</a>
                        </div>
                        </Link>

                        <form className="form-inline my-2 my-lg-0">
                            <input onChange={this.props.handleChange} value={this.props.searchTerm} type="search" className="form-control mr-sm-2" placeholder="Search"></input>
                        </form>

                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <Link to={`/sign-up`}>
                                <button className="btn btn-info">
                                Sign Up
                            </button> 
                              </Link>
                            </li>
                            <li><a href="#"> Login</a></li>
                        </ul> 
                         
                    </div>
                </nav>            
            </div>
        )
    }
}


