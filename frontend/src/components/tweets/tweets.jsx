/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';

class Tweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    this.props.fetchTweets();
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(newState) {
    this.setState({ tweets: newState.tweets });
  }

  render() {
    if (this.state.tweets.length === 0) {
      return <div>There are no Tweets</div>;
    }
    return (
      <div>
        <h2>All Tweets</h2>
        {this.state.tweets.map((tweet) => (
          // eslint-disable-next-line no-underscore-dangle
          <TweetBox key={tweet._id} text={tweet.text} />
        ))}
      </div>
    );
  }
}

export default withRouter(Tweet);
