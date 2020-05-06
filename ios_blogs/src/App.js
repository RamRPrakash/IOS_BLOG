import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Routes from './router'

function App() {
  return (
    <HashRouter>
      <Switch>
        {
          Routes.map((item, index) => {
            return <Route key={'route_' + index}
              path={item.path}
              component={item.component}
              exact={item.exact || false}
            />
          })
        }
      </Switch>
      </HashRouter>
  );
}

export default App;
