import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from './components/Main'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header/>
      <br/><br/><br/><br/>
        <Switch>
          <Route path="/" exact component={Main}/>
        </Switch>
    </Router>
  );
}

export default App;
