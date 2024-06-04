import React from 'react';
import styled from 'styled-components';

// Styled Components (Optional)

/*
const ExploreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
`;


*/
const Explore = () => {

  const TrendingTopic = styled.div`
  border: 1px solid #e1e8ed;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f5f8fa;
  }
`;

const SuggestedUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
  // Sample trending topics data
  const trendingTopics = [
    { id: 1, hashtag: 'Technology', tweetCount: 10000 },
    { id: 2, hashtag: 'SocialMedia', tweetCount: 8000 },
    { id: 3, hashtag: '#Funny', tweetCount: 5000 },
  ];

  // Sample suggested users data
  const suggestedUsers = [
    { id: 1, username: 'TechNews', avatar: 'https://via.placeholder.com/40' },
    { id: 2, username: 'SocialButterfly', avatar: 'https://via.placeholder.com/40' },
    { id: 3, username: 'ComedianCorner', avatar: 'https://via.placeholder.com/40' },
  ];

  return (
    <div>
      <h2>Trending Topics</h2>
      {trendingTopics.map((topic) => (
        <TrendingTopic key={topic.id}>
          #{topic.hashtag} ({topic.tweetCount})
        </TrendingTopic>
      ))}

      <h2>Suggested Users</h2>
      {suggestedUsers.map((user) => (
        <SuggestedUser key={user.id}>
          <img src={user.avatar} alt={user.username} />
          <span>{user.username}</span>
        </SuggestedUser>
      ))}
    </div>
  );
};

export default Explore;
