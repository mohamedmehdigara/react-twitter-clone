import React, { useState } from 'react';

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
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
        maxLength={280} // Optional: Limit tweet length to 280 characters (Twitter's character limit)
        required
        style={styles.textArea}
      />
      <button type="submit">Tweet</button>
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
