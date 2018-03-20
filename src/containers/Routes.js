import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import MyLoadingComponent from '../components/MyLoadingComponent';

// dynamically import the component we want. We are passing a function here.
// This is because we want to explicitly state the component we are dynamically
// importing. Webpack splits our app based on this. It looks at these imports
// and generates the required parts (or chunks).

const AsyncHome = Loadable({
  loader: () => import('./home/Home'),
  loading: MyLoadingComponent,
});

const AsyncNotFound = Loadable({
  loader: () => import('./notfound/NotFound'),
  loading: MyLoadingComponent,
});

AsyncHome.preload().then(() => {
  AsyncNotFound.preload();
});

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route component={AsyncNotFound} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
