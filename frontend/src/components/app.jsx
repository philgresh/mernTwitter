import React from 'react';
import { Switch } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './nav/navbar';

import MainPage from './main/main_page';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
    </Switch>
  </div>
);

export default App;
