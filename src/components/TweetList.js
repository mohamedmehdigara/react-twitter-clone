import React, { useState } from 'react';
import Tweet from './Tweet';
import styled from 'styled-components';

const TweetContainer = styled.div`
  border-bottom: 1px solid #e1e8ed;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
`;

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
        <TweetContainer key={tweet.id}>
          <Tweet tweet={tweet} />
          <Actions>
            <button onClick={() => handleLike(tweet.id)}>Like</button>
            <button onClick={() => handleRetweet(tweet.id)}>Retweet</button>
          </Actions>
        </TweetContainer>
      ))}
    </div>
  );
};

export default TweetList;
