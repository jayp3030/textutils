import React from 'react'
import { Link } from 'react-router-dom';
import '../componentsCSS/navbar.css';

function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                      Textutils
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                      
                    </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
