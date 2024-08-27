import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const UserSettings = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    // Validate and update user data using API
    // ...
    setIsEditing(false);
  };

  return (
    <UserSettingsContainer>
      <h2>User Settings</h2>
      <UserInfo>
        <Avatar src={userData.avatar} alt="User Avatar" />
        <div>
          <h3 contenteditable={isEditing}>{userData.name}</h3>
          <p contenteditable={isEditing}>@{userData.username}</p>
        </div>
      </UserInfo>
      <Form>
        <Label htmlFor="bio">Bio</Label>
        <TextArea
          id="bio"
          value={userData.bio || ''}
          onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
          disabled={!isEditing}
        />
        <ButtonContainer>
          <Button onClick={handleEditClick}>
            {isEditing ? 'Cancel' : 'Edit'}
          </Button>
          {isEditing && <Button onClick={handleSaveChanges}>Save Changes</Button>}
        </ButtonContainer>
      </Form>
    </UserSettingsContainer>
  );
};

const UserSettingsContainer = styled.div`
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

const Form = styled.form`
  margin-top: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

export default UserSettings;