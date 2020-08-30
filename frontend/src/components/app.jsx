import React from 'react';
import { Switch } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './nav/navbar';

import MainPage from './main/main_page';
import SessionContainer from './session/session_container';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={SessionContainer} />
      <AuthRoute exact path="/signup" component={SessionContainer} />
    </Switch>
  </div>
);

export default App;
