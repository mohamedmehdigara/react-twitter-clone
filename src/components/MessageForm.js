import React, { useState } from 'react';
import styled from 'styled-components';

const MessageForm = ({ onSendMessage }) => {
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (messageText.trim() !== '') {
      onSendMessage(messageText);
      setMessageText('');
    }
  };

  return (
    <MessageFormContainer>
      <MessageInput
        type="text"
        placeholder="Type your message..."
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
      />
      <SendButton onClick={handleSubmit}>Send</SendButton>
    </MessageFormContainer>
  );
};

const MessageFormContainer = styled.form`
  display: flex;
  align-items: center;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 0.5rem;
`;

const SendButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

export default MessageForm;