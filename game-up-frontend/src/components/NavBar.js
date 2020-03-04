import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'


export default class NavBar extends Component {

    render() {
        return (
            <div className="NavComponent">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    {/* < div className="container-fluid"> */}
                        <Link to={`/`}>
                            <a className="navbar-brand" href="#"><img className="logo"src={logo} /></a>
                        </Link>
                        <ul className="navbar-nav">
                        <Link to={`/games`}>
                        <li><div className="nav-item">
                            <a className="navbar-brand" href="#">GAMES</a>
                        </div></li>
                        </Link>
                        </ul>

                        <form className="form-inline mx-auto order-0">
                            <input onChange={this.props.handleChange} value={this.props.searchTerm} type="search" className="form-control mr-sm-2" placeholder="Search"></input>
                        </form>

                        <ul className=" navbar-nav navbar-right ml-auto">
                            <li>
                                <Link to={`/sign-up`}>
                                    <button className="btn btn-info">
                                        Sign Up
                                    </button> 
                                </Link>
                            </li>

                            {this.props.handleLogin === null ? 
                            <li>
                                <Link to={`/login`}>
                                  <button className="btn btn-warning"> 
                                     Login
                                    </button>
                                </Link>
                            </li>
                            : 
                            <button onClick={this.props.handleLogout}>Logout</button>
                            }
                             
                        </ul> 
                         
                    {/* </div> */}
                </nav>            
            </div>
        )
    }
}


