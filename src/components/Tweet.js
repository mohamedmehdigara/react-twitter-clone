import React from 'react';
import styled from 'styled-components';

const TweetContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #e1e8ed;
`;

const AvatarContainer = styled.div`
  margin-right: 1rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const TweetContent = styled.div`
  flex: 1;
`;

const UserInfo = styled.div`
  margin-bottom: 0.5rem;
`;

const Username = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const DisplayName = styled.span`
  color: #657786;
  margin-right: 0.5rem;
`;

const Timestamp = styled.span`
  color: #657786;
`;

const TweetText = styled.p`
  margin-bottom: 0.5rem;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  color: #657786;
`;

const Tweet = ({ tweet }) => {
  const { user, text, timestamp, likes, retweets, replies } = tweet;

  return (
    <TweetContainer>
      <AvatarContainer>
        <Avatar src={user.avatar} alt="User Avatar" />
      </AvatarContainer>
      <TweetContent>
        <UserInfo>
          <Username>{user.username}</Username>
          <DisplayName>@{user.displayName}</DisplayName>
          <Timestamp>{timestamp}</Timestamp>
        </UserInfo>
        <TweetText>{text}</TweetText>
        <Actions>
          <span>{likes} Likes</span>
          <span>{retweets} Retweets</span>
          <span>{replies} Replies</span>
        </Actions>
      </TweetContent>
    </TweetContainer>
  );
};

export default Tweet;
