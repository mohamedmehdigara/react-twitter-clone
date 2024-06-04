import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
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

const Sidebar = styled.div`
  width: 250px;
  padding: 1rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavLink = styled(Link)`
  color: #1da1f2;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
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

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownLink = styled(NavLink)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavContainer>
      <Sidebar>
        <NavLinks>
          <li>
            <NavLink to="/">
              <Icon className="fa fa-home" /> Accueil
            </NavLink>
          </li>
          {/* ... other navigation links */}
          <li>
            <NavLink to="/explore">
              <Icon className="fa fa-hashtag" /> Explorer
            </NavLink>
          </li>
          {/* ... other navigation links */}
          <li>
            <Dropdown onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <NavLink to="/more">
                <Icon className="fa fa-ellipsis-h" /> Plus
              </NavLink>
              {isOpen && (
                <DropdownContent>
                  <DropdownLink to="/settings">
                    <Icon className="fa fa-cog" /> Paramètres
                  </DropdownLink>
                  <DropdownLink to="/help">
                    <Icon className="fa fa-question-circle" /> Aide
                  </DropdownLink>
                  {/* More dropdown links */}
                  <DropdownLink to="/profile">
                    <Icon className="fa fa-user" /> Profil
                  </DropdownLink>
                  <DropdownLink to="/logout">
                    <Icon className="fa fa-sign-out" /> Se déconnecter
                  </DropdownLink>
                </DropdownContent>
              )}
            </Dropdown>
          </li>
        </NavLinks>
      </Sidebar>

      {/* User Info (Placeholder) */}
      <UserInfo>
        <Avatar src="https://via.placeholder.com/40" alt="User Avatar" />
        <Username>JohnDoe123</Username>
      </UserInfo>

      <TweetButton>Tweeter</TweetButton>
    </NavContainer>
  );
};

export default Navbar;