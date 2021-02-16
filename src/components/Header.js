import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import Cookie from 'universal-cookie';

function Header() {
  const cookie = new Cookie();
  const token = cookie.get('token');

  const logout = () => {
    cookie.remove('token');
  }
  return (
      <>
    <nav className="navbar navbar-dark bg-dark fixed-top">
        <a href="/" className="navbar-brand p-2" style={{'fontSize':25}}>Burak İmdat</a>
        
                <form className="form-inline p-1">
                    <Link to="/">
                        <h2 className="btn btn-link btn-light m-1 ">Home</h2>
                    </Link>
                  {token ? (
                  <>
                    <Link to="/cart">
                        <h2 className="btn btn-link btn-light m-1 ">Cart</h2>
                    </Link>
                    <Link to="/createproduct">
                        <h2 className="btn btn-link btn-light m-1 ">Create Product</h2>
                    </Link>
                    <Link to="/signout">
                        <h2 className="btn btn-link btn-light m-1" onClick={logout}>Logout</h2>
                    </Link>
                  </>
                  ) : (
                  <>
                    <Link to="/signin">
                        <h2 className="btn btn-link btn-light m-1 ">Sign In</h2>
                    </Link>
                    <Link to="/signup">
                        <h2 className="btn btn-link btn-light m-1 ">Sign Up</h2>
                    </Link>
                  </>
                  )}
                </form>
        
       
    </nav>
    
  </>
  );
}

export default Header;
