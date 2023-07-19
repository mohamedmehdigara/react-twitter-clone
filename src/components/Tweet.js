import React from 'react';

const Tweet = ({ tweet }) => {
  const { user, text, timestamp, likes, retweets, replies } = tweet;

  return (
    <div style={styles.tweetContainer}>
      <div style={styles.avatarContainer}>
        <img src={user.avatar} alt="User Avatar" style={styles.avatar} />
      </div>
      <div style={styles.tweetContent}>
        <div style={styles.userInfo}>
          <span style={styles.username}>{user.username}</span>
          <span style={styles.displayName}>@{user.displayName}</span>
          <span style={styles.timestamp}>{timestamp}</span>
        </div>
        <div style={styles.tweetText}>
          <p>{text}</p>
        </div>
        <div style={styles.actions}>
          <span>{likes} Likes</span>
          <span>{retweets} Retweets</span>
          <span>{replies} Replies</span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;

const styles = {
  tweetContainer: {
    display: 'flex',
    padding: '1rem',
    borderBottom: '1px solid #e1e8ed',
  },
  avatarContainer: {
    marginRight: '1rem',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  tweetContent: {
    flex: '1',
  },
  userInfo: {
    marginBottom: '0.5rem',
  },
  username: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },
  displayName: {
    color: '#657786',
    marginRight: '0.5rem',
  },
  timestamp: {
    color: '#657786',
  },
  tweetText: {
    marginBottom: '0.5rem',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#657786',
  },
};
