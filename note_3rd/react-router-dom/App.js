import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      {/* UI elements for demo link list to other pages */}
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/p1">P1</Link></li>
          <li><Link to="/p2">P2</Link></li>
        </ul>


        {/* page routers */}
        <Switch>
          <Route path="/p1" component={P1} />
          <Route path="/p2" component={P2} />
          <Route path="/"><Home/></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return(
    <p>Home</p>
  );
}

function P1() {
  return(
    <p>P1</p>
  );
}

function P2() {
  return(
    <p>P2</p>
  );
}