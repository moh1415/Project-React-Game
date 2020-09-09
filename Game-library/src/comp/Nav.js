import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class NavBar extends React.Component{

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <h4><Link className="navbar-brand" to="/Home">Game</Link>{' '}</h4>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                           <h5><Link className="nav-link" to="/Home">Home</Link>{' '}</h5>
                        </li>
                        <li className="nav-item">
                            <h5><Link className="nav-link" to="/List">List Of Games</Link>{' '}</h5>
                        </li>

                        <li className="nav-item">
                            <h5><Link className="nav-link" to="/mygames">My Games</Link>{' '}</h5>
                        </li>
                    </ul>

                </div>
            </nav>

        )
    }
}

export default NavBar;
