import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { DropdownContainer, DropdownButton, DropdownContent, DropdownItem } from './DropdownStyles';

const DropdownMenu = ({ label, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setActiveIndex(0); // Reset active index when opening
  };

  const handleKeyDown = (event) => {
    if (isOpen) {
      const { key } = event;
      if (key === 'ArrowDown') {
        setActiveIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
      } else if (key === 'ArrowUp') {
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (key === 'Escape' || key === 'Enter') {
        toggleDropdown();
      } else if (key === 'Tab') {
        event.preventDefault(); // Prevent default tab behavior
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown} onKeyDown={handleKeyDown}>
        {label}
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {items.map((item, index) => (
            <DropdownItem
              key={item.value}
              onClick={() => {
                onSelect(item);
                setIsOpen(false);
              }}
              tabIndex={index === activeIndex ? 0 : -1}
              onKeyDown={handleKeyDown}
            >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

// ... other styled components

export default DropdownMenu;