import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import SearchBar from './SearchBar';


const NavContainer = styled.nav`
  display: flex; /* Change to flex for horizontal layout */
  justify-content: space-between; /* Distribute elements horizontally */
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; /* Display links horizontally */
  background: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 2rem;
  margin-top: 1rem;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1b9bff;
  };
  align-items: space-between
`;

const Icon = styled.i`
  margin-right: 10px;
`;

const TweetButton = styled.button`
  background: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 2rem;
  margin-top: 1rem;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1b9bff;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const Username = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;


const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  {
    label: 'More',
    items: [
      { label: 'Settings', href: '/settings' },
      { label: 'Help', href: '/help' },
    ],
  },
];

const Navbar = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <NavContainer>
      <NavLinks>
        <li>
          <NavLink to="/">
            <Icon className="fa fa-home" /> Home
          </NavLink>
        </li>
        {/* ... other navigation links */}
        <li>
          <NavLink to="/explore">
            <Icon className="fa fa-hashtag" /> Explore
          </NavLink>
        </li>
        {/* ... other navigation links */}
        <li>
          <NavLink to="/more">
            <Icon className="fa fa-ellipsis-h" /> Plus
          </NavLink>
        </li>
        <li>
          <NavLink to="/Settings">
            <Icon className="fa fa-cog" /> Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/UserSettings">
            <Icon className="fa fa-cog" /> UserSettings
          </NavLink>
        </li>
        <li>
          <NavLink to="/Help">
            <Icon className="fa fa-question-circle" /> Help
          </NavLink>
        </li>
        <li>
          <Link to="/profile">
            <Icon className="fa fa-user" /> Profil
          </Link>
        </li>
        <li>
          <NavLink to="/AboutPage">
            <Icon  /> About 
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout">
            <Icon className="fa fa-sign-out" /> Sign out
          </NavLink>
        </li>
      </NavLinks>
      <UserInfo>
        <Avatar src="https://via.placeholder.com/40" alt="User Avatar" />
        <Username>JohnDoe123</Username>
      </UserInfo>
      <TweetButton onClick={() => navigate('/tweet')}>Tweeter</TweetButton>
    </NavContainer>
  );
};

// ... other styled components (NavContainer, NavLinks, etc.)

export default Navbar;