import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MessageForm from './MessageForm';

const DirectMessages = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get('/api/direct_messages'); // Replace with your API endpoint
        setConversations(response.data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    fetchConversations();
  }, []);

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <DirectMessagesContainer>
      <ConversationList>
        {conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            onClick={() => handleConversationClick(conversation)}
            selected={conversation === selectedConversation}
          >
            {conversation.recipient.name}
          </ConversationItem>
        ))}
      </ConversationList>
      <ConversationDetails>
        {selectedConversation && (
          <div>
            <h2>{selectedConversation.recipient.name}</h2>
            <MessageList>
              {selectedConversation.messages.map((message) => (
                <MessageItem key={message.id}>
                  {message.sender.name}: {message.content}
                </MessageItem>
              ))}
            </MessageList>
            <MessageForm /> {/* Add a component for sending messages */}
          </div>
        )}
      </ConversationDetails>
    </DirectMessagesContainer>
  );
};

const DirectMessagesContainer = styled.div`
  display: flex;
`;

const ConversationList = styled.ul`
  list-style: none;
  padding: 0;
  width: 300px;
`;

const ConversationItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${props => props.selected ? '#f0f0f0' : 'transparent'};
`;

const ConversationDetails = styled.div`
  flex: 1;
  padding: 1rem;
`;

const MessageList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MessageItem = styled.li`
  margin-bottom: 0.5rem;
`;

export default DirectMessages;