import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div className="NavComponent">
                <nav className="navbar">
                    <div className="logo">LOGO</div>
                    <form className="form-inline my-2 my-lg-0">
                        <input onChange={this.props.handleChange} value={this.props.searchTerm} type="search" className="form-control mr-sm-2" placeholder="Search"></input>
                    </form>
                    <div className="login">Login</div>    
                </nav>            
            </div>
        )
    }
}


