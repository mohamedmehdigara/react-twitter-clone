import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 5px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0.75rem 1rem;
  font-size: 16px;
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.75rem;

  &:hover {
    background-color: #e1e1e1;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Call the provided onSearch function with the search term
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <SearchButton type="submit" onClick={handleSubmit}>
        <i className="fas fa-search"></i>
      </SearchButton>
    </SearchBarContainer>
  );
};


export default SearchBar;
