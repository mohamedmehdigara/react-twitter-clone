import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Trends = () => {
  const [trendingTopics, setTrendingTopics] = useState([]);

  useEffect(() => {
    const fetchTrendingTopics = async () => {
      try {
        const response = await axios.get('/api/trending_topics'); // Replace with your API endpoint
        setTrendingTopics(response.data);
      } catch (error) {
        console.error('Error fetching trending topics:', error);
      }
    };

    fetchTrendingTopics();
  }, []);

  return (
    <TrendsContainer>
      <h2>Trending Topics</h2>
      <TrendingList>
        {trendingTopics.map((topic) => (
          <TrendingItem key={topic.id}>
            #{topic.hashtag} ({topic.tweetCount})
          </TrendingItem>
        ))}
      </TrendingList>
    </TrendsContainer>
  );
};

const TrendsContainer = styled.div`
  padding: 1rem;
`;

const TrendingList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TrendingItem = styled.li`
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Trends;