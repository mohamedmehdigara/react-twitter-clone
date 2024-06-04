import React, { useState } from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: none;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const TweetButton = styled.button`
  background-color: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1b9bff;
  }
`;
const TweetForm = ({ addTweet }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate tweet content (optional)
    if (text.trim() === '') {
      return;
    }

    // Create a new tweet object
    const newTweet = {
      id: Date.now(), // Use a unique ID (you can use a library like uuid for better uniqueness)
      text: text,
      timestamp: new Date().toLocaleString(), // Add the current timestamp
      likes: 0, // Initial likes count
      retweets: 0, // Initial retweets count
      replies: 0, // Initial replies count
      user: {
        username: 'JohnDoe123', // Replace with the current logged-in user's username
        displayName: 'John Doe', // Replace with the current logged-in user's display name
        avatar: 'https://via.placeholder.com/40', // Replace with the URL of the user's avatar
      },
    };

    // Call the addTweet function to add the new tweet to the tweet list
    addTweet(newTweet);

    // Clear the text area after submitting the tweet
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
        maxLength={280}
        required
      />
      <TweetButton type="submit">Tweet</TweetButton>
    </form>
  );
};

export default TweetForm;

const styles = {
  textArea: {
    width: '100%',
    minHeight: '100px',
    resize: 'none',
    marginBottom: '1rem',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
};
