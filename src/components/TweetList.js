import React, { useState } from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets }) => {
  const [tweetData, setTweetData] = useState(tweets);

  const handleLike = (tweetId) => {
    setTweetData((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  const handleRetweet = (tweetId) => {
    setTweetData((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId ? { ...tweet, retweets: tweet.retweets + 1 } : tweet
      )
    );
  };

  return (
    <div>
      {tweetData.map((tweet) => (
        <div key={tweet.id}>
          <Tweet tweet={tweet} />
          <div style={styles.actions}>
            <button onClick={() => handleLike(tweet.id)}>Like</button>
            <button onClick={() => handleRetweet(tweet.id)}>Retweet</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TweetList;

const styles = {
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0.5rem',
  },
};
