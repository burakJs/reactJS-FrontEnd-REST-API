import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from './components/Main'
import Header from './components/Header'
import Login from './components/Login'
import SignUp from './components/SignUp'
import CreateProduct from './components/CreateProduct'

function App() {
  return (
    <Router>
      <Header/>
      <br/><br/><br/><br/>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/signin" exact component={Login}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/createproduct" exact component={CreateProduct}/>
        </Switch>
    </Router>
  );
}

export default App;
