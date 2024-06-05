import React, { useState } from 'react';
import styled from 'styled-components';

const Settings = () => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <SettingsContainer>
      <h2>Paramètres</h2>
      <UserInfo>
        <Avatar src="https://via.placeholder.com/150" alt="User Avatar" />
        <div>
          <Username>John Doe</Username>
          {editMode ? (
            <EditButton onClick={toggleEditMode}>Save</EditButton>
          ) : (
            <EditButton onClick={toggleEditMode}>Edit Profile</EditButton>
          )}
        </div>
      </UserInfo>
      <SettingsForm onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
        <FormSection>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormInput
            type="text"
            id="username"
            defaultValue="John Doe"
            disabled={!editMode}
          />
        </FormSection>
        <FormSection>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" defaultValue="johndoe@example.com" disabled /> {/* Email can't be edited */}
        </FormSection>
        <FormSection>
          <FormLabel htmlFor="bio">Bio</FormLabel>
          <FormTextArea
            id="bio"
            defaultValue="A little bit about myself..."
            disabled={!editMode}
            rows={4}
          />
        </FormSection>
        {editMode && (
          <ButtonContainer>
            <CancelButton onClick={toggleEditMode}>Cancel</CancelButton>
            <SaveButton type="submit">Save Changes</SaveButton>
          </ButtonContainer>
        )}
      </SettingsForm>
      {/* ... Other settings sections (e.g., Notifications, Privacy) */}
    </SettingsContainer>
  );
};

const SettingsContainer = styled.div`
  padding: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Username = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const EditButton = styled.button`
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormSection = styled.div`
  display: flex;
  align-items: center;
`;

const FormLabel = styled.label`
  width: 120px;
  font-weight: bold;
  margin-right: 1rem;
`;

const FormInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FormTextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
  resize: vertical;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

// ... other imports and code

const CancelButton = styled.button`
  background: #ccc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #bbb;
  }
`;

const SaveButton = styled.button`
  background: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1b9bff;
  }
`;


export default Settings;