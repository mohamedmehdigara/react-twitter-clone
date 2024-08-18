import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 16px; /* Adjust font size as needed */

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

export const DropdownContent = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;