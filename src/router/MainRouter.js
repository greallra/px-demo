import React, { useEffect } from "react";
import HomeScreen from '../screens/HomeScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function MainRouter() {

    return (
        <div style={{overflow: 'hidden'}}>
        <Router>  
           <Switch>
                {/* Public routes */}
                <Route path="/" exact>
                    <HomeScreen />
                </Route>
            </Switch>
        </Router>
        </div>
    )
}