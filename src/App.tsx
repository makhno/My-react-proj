import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"

import Demo from "./Demo"
import AboutFunc from "./AboutFunc"
import AboutCl from "./AboutCl"
import AxiosExample from "./AxiosExample"

export default function App() {
    console.log("Rendering app");
    return (
        <BrowserRouter>
        <h1>Hello</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/demo">Demo</Link>
              </li>
              <li>
                <Link to="/aboutFunc">About Func</Link>
              </li>
              <li>
                 <Link to="/aboutCl">About Class</Link>
              </li>
              <li>
                  <Link to="/axiosExample">Axios Example</Link>
              </li>
            </ul>
            <>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <h1>Home</h1>
                        )}
                    />
                </Switch>
                <Switch>
                    <Route
                        exact
                        path="/demo"
                        render={() => (
                            <Demo/>
                        )}
                    />
                </Switch>
                <Switch>
                    <Route
                        exact
                        path="/aboutFunc"
                        render={() => (
                            <AboutFunc/>
                        )}
                    />
                </Switch>
                <Switch>
                    <Route
                        exact
                        path="/aboutCl"
                        render={() => (
                            <AboutCl passedProp = "hello world"/>
                        )}
                    />
                </Switch>
                <Switch>
                    <Route
                        exact
                        path="/axiosExample"
                        render={() => (
                            <AxiosExample/>
                        )}
                    />
                </Switch>
            </>
        </BrowserRouter>
    );
}
