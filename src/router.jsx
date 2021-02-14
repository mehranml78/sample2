import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Utils from "./components/Utils"
class PRoutes extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/page1">
<Utils />
{console.log("imhere")}
          </Route>
          {/* <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default PRoutes;
