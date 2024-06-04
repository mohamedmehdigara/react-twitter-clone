import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>{label}</DropdownButton>
      {isOpen && (
        <DropdownContent>
          {items.map((item) => (
            <DropdownItem key={item.value} href={item.href}>
              {item.label}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownContent = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 0.5rem;
  list-style: none;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export default DropdownMenu;
