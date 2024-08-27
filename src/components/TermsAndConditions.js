import React from 'react';
import styled from 'styled-components';

function TermsAndConditions() {
    const TermsContainer = styled.div`
  padding: 1rem;
`;
    return (
        <TermsContainer>
          <h1>Terms and Conditions</h1>
          <section>
            <h2>User Conduct</h2>
            <p>...</p>
          </section>
          <section>
            <h2>Intellectual Property</h2>
            <p>...</p>
          </section>
          {/* ... other sections */}
        </TermsContainer>
      );
}

export default TermsAndConditions
