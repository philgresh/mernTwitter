import React from 'react';
import { Switch } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './nav/navbar';
import TweetsContainer from './tweets/tweets_container';
import MainPage from './main/main_page';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
// import ProfileContainer from './profile/profile_container';
import TweetComposeContainer from './tweets/tweet_compose_container';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      {/* <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
      <ProtectedRoute
        exact
        path="/new_tweet"
        component={TweetComposeContainer}
      />
    </Switch>
  </div>
);

export default App;
