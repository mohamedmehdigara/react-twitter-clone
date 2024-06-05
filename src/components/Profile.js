import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Profile = () => {
  const [userData, setUserData] = useState(null); // State for user data

  
  if (!userData) return <p>Chargement du profil...</p>; // Loading message

  return (
    <ProfileContainer>
      <UserInfo>
        <Avatar src={userData.avatar || 'https://via.placeholder.com/150'} alt="User Avatar" />
        <div>
          <h2>{userData.name}</h2>
          <p>@{userData.username}</p>
          <Link to="/edit-profile">Modifier le profil</Link> {/* Link to edit profile */}
        </div>
      </UserInfo>
      <Stats>
        <StatItem>
          <h3>{userData.posts}</h3>
          <p>Publications</p>
        </StatItem>
        <StatItem>
          <h3>{userData.followers}</h3>
          <p>Abonnements</p>
        </StatItem>
        <StatItem>
          <h3>{userData.following}</h3>
          <p>Abonnements</p>
        </StatItem>
      </Stats>
      {/* ... Your components for displaying user's posts and other profile sections */}
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
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

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StatItem = styled.div`
  text-align: center;
`;

export default Profile;
