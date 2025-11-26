import React from "react";
import { Link } from "react-router";
export default function Navbar() {
  const logout = ()=>{
    localStorage.removeItem('token');
    window.open('/login','_top')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Gnote
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse"  id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/about">About Us</Link></li> 
            <li className="nav-item"><Link className="nav-link active" to="/create_note">Add Note</Link></li> 
          </ul>
          
          {!localStorage.getItem('token')?<div className="d-flex my-2 my-lg-0" >
            <Link to="/login" className="btn btn-danger my-2 my-sm-0">Login</Link>
            <Link to="/singup" className="btn btn-danger my-2 my-sm-0">Signup</Link>
          </div>:<button onClick={logout} className="btn btn-danger my-2 my-sm-0">Logout</button>}
        </div> 
      


      </div>
    </nav>
  );
}
