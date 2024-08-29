import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const UserSettingsContainer = styled.div`
  padding: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const Button = styled.div`
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

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex
  `;

const UserSettings = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  // Fetch user data on component mount (replace with your API call)
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      const response = await fetch('/api/user'); // Replace with your API endpoint
      const data = await response.json();
      setUserData(data);
      setIsLoading(false);
    };
    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = async () => {
    // Validate and update user data using API
    try {
      const response = await fetch('/api/user', {
        method: 'PUT',
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User data updated successfully!');
      } else {
        console.error('Error updating user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    } finally {
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <UserSettingsContainer>
      <h2>User Settings</h2>
      {isLoading ? (
        <p>Loading user data...</p>
      ) : (
        <Form>
          <UserInfo>
            <Avatar src={userData?.avatar || 'placeholder.png'} alt="User Avatar" /> {/* Add default avatar */}
            <div>
              {isEditing && (
                <>
                  <Label htmlFor="name">Name:</Label>
                  <Input type="text" id="name" name="name" value={userData?.name || ''} onChange={handleChange} disabled={!isEditing} />
                  <Label htmlFor="email">Email:</Label>
                  <Input type="email" id="email" name="email" value={userData?.email || ''} onChange={handleChange} disabled /> {/* Email should not be editable */}
                </>
              )}
              {!isEditing && (
                <p>
                  {userData?.name} - {userData?.email}
                </p>
              )}
            </div>
          </UserInfo>
          <Label>Bio:</Label>
          <TextArea
            id="bio"
            name="bio"
            value={userData?.bio || ''}
            onChange={handleChange}
            disabled={!isEditing}
          />
          <ButtonContainer>
            <Button onClick={handleEditClick}>
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
            {isEditing && <Button onClick={handleSaveChanges}>Save Changes</Button>}
          </ButtonContainer>
        </Form>
      )}
    </UserSettingsContainer>
  );
};

export default UserSettings;