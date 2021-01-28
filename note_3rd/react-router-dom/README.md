# react-router-dom quick-start
Use React router dom to switch one of pages in web App

### References 
References by 

- [React-router-dom Quick Start](https://reactrouter.com/web/guides/quick-start) 

### Steps
 1. Install
 
     npm install react-router-dom
 
 2. code 
 
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

### Demo 

![Switch Home](https://github.com/u0652804/CreateFullStackWithJS/blob/main/note_3rd/react-router-dom/img/demo1.PNG)

![Switch P1](https://github.com/u0652804/CreateFullStackWithJS/blob/main/note_3rd/react-router-dom/img/demo2.PNG)

![Switch P2](https://github.com/u0652804/CreateFullStackWithJS/blob/main/note_3rd/react-router-dom/img/demo3.PNG)
