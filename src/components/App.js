import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import Loading from './Loading';

const AsyncDynamicPage = importedComponent(/* webpackChunkName: "DynamicPage" */ () => import(/* webpackChunkName: "DynamicPage" */ './DynamicPage'), { LoadingComponent: Loading });
const AsyncNoMatch = importedComponent(/* webpackChunkName: "NoMatch" */ () => import(/* webpackChunkName: "NoMatch" */ './NoMatch'), { LoadingComponent: Loading });

const App = function() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;