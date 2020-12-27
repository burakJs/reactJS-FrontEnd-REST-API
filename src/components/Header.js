import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


function Header() {
  return (
      <>
    <nav className="navbar navbar-dark bg-dark fixed-top">
        <a href="/" className="navbar-brand p-2" style={{'fontSize':25}}>Burak İmdat</a>
        
                <form className="form-inline p-1">
                <Link to="/">
                        <a className="btn btn-link btn-light m-1 ">Home</a>
                    </Link>
                    <Link to="/cart">
                        <a className="btn btn-link btn-light m-1 ">Cart</a>
                    </Link>

                    <Link to="/signin">
                        <a className="btn btn-link btn-light m-1 ">Login</a>
                    </Link>
                      <>
                      <Link to="/signout">
                        <a className="btn btn-link btn-light m-1 ">Logout</a>
                      </Link>
                      </>
                </form>
        
       
    </nav>
    
  </>
  );
}

export default Header;
