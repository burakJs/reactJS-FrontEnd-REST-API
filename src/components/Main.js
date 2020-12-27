import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Main() {
    return (
      <div className="container">
      <div className="card mb-3" style={{'maxWidth':540+'px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button className="btn btn-dark">Add to cart</button>     
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Main;
  