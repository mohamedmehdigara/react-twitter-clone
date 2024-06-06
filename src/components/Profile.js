import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import styled from 'styled-components';

const Profile = () => {
  const [userData, setUserData] = useState(null); // State for user data

  useEffect(() => {
    // Simulate fetching user data from an API (replace with your actual logic)
    const fetchData = async () => {
      const response = await fetch('/api/user'); // Replace with your API endpoint
      const data = await response.json();
      setUserData(data);
    };
    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  if (!userData) return <p>Chargement du profil...</p>; // Loading message

  return (
    <ProfileContainer>
      <UserInfo>
        <Avatar src={userData.avatar || 'https://via.placeholder.com/150'} alt="User Avatar" />
        <div>
          <h2>{userData.name}</h2>
          <p>@{userData.username}</p>
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
