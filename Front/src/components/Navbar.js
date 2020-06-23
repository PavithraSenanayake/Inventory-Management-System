import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component {

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken');
        this.props.history.push(`/`)

    }

    render() {
        const loginRegLink = (
            <ul className="nav nav-tabs">
                <li className = "nav-item">
                    <Link to="/login" className="nav-link">Login
                    </Link>
                </li>

                <li className = "nav nav-tabs">              
                    <Link to="/register" className="nav-link">Register
                    </Link>
                </li>
            </ul>

        )
        const userLink = (
            <ul className="nav nav-tabs">
                <li className = "nav-item">
                    <Link to="/profile" className="nav-link">User
                    </Link>
                </li>

                <li className = "nav-item">
                    <Link to="/additem" className="nav-link">Add Item
                    </Link>
                </li>

                <li className = "nav-item">
                    <Link to="/itemlist" className="nav-link">Item List
                    </Link>
                </li>

                    <li className="nav-item">
                        <Link to a href="" onClick={this.logOut.bind(this)} className="nav=link">Log out</Link>
                    </li>
                
            </ul>

        )

        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to = "/" className="nav-link">Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink: loginRegLink} 
                </div>


            </nav>

        )
    }
}

export default withRouter(Navbar);