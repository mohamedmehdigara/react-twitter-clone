import React from 'react';
import styled from 'styled-components';

const AboutPage = () => {
    return (
        <AboutContainer>
          <h1>About Us</h1>
          <section>
            <h2>Our Mission</h2>
            <p>...</p>
          </section>
          <section>
            <h2>Our Team</h2>
            <ul>
              {/* List of team members */}
            </ul>
          </section>
          {/* ... other sections */}
        </AboutContainer>
      );
};

const AboutContainer = styled.div`
  padding: 1rem;
`;

export default AboutPage;