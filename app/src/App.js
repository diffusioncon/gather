import { ApiPromise, WsProvider } from '@polkadot/api';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from "./containers/Home";
import AppWrapper from "./containers/AppWrapper";

export default function App () {
  const [api, setApi] = useState();
  const [apiReady, setApiReady] = useState();

  useEffect(() => {
    const provider = new WsProvider(process.env.REACT_APP_WS_TARGET || 'ws://127.0.0.1:9944');

    ApiPromise.create({provider})
      .then((api) => {
        setApi(api);
        api.isReady.then(() => setApiReady(true));
      })
      .catch((e) => console.error(e));
  }, []);
  

  return (
    <AppWrapper apiReady={apiReady} api={api} >
      <Router>
        <Switch>
          {/* <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/event">
            <Topics />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
   
  );
}
