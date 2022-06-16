import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-brand btn">Navbar</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/dashboard">Dashboard<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/buy">Buy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sell">Sell</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar