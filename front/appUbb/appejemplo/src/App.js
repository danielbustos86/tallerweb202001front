import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './views/login';
import Principal from './views/principal';
import Regus from './views/componentes/registrousuario';

export default function App() {
  return (
    <Router>
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/menu">
            <Principal />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
    
       
        </Switch>
    
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}