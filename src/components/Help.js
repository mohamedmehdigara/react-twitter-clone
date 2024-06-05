import React from 'react';
import styled from 'styled-components';

const Help = () => {
  return (
    <HelpContainer>
      <h1>Aide</h1>
      <p>
        Bienvenue dans la section d'aide ! Ici, vous trouverez des réponses aux
        questions fréquemment posées, des guides d'utilisation et plus encore.
      </p>
      <AccordionContainer>
        <AccordionItem>
          <AccordionTitle>Général</AccordionTitle>
          <AccordionContent>
            <p>
              Cette section couvre les questions générales sur la plateforme,
              comme la création de compte, la navigation, et la publication de
              contenu.
            </p>
            <List>
              <ListItem>Comment créer un compte ?</ListItem>
              <ListItem>Comment naviguer sur la plateforme ?</ListItem>
              <ListItem>Comment publier un message ?</ListItem>
            </List>
          </AccordionContent>
        </AccordionItem>
        {/* ... Add more accordion items for other topics */}
      </AccordionContainer>
      <p>
        Si vous ne trouvez pas la réponse à votre question ici, n'hésitez pas à
        nous contacter par email à <a href="mailto:support@example.com">support@example.com</a>.
      </p>
    </HelpContainer>
  );
};

const HelpContainer = styled.div`
  padding: 1rem;
`;

const AccordionContainer = styled.div`
  margin-bottom: 1rem;
`;

const AccordionItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const AccordionTitle = styled.h2`
  padding: 0.75rem 1rem;
  font-weight: bold;
  margin: 0;
`;

const AccordionContent = styled.div`
  padding: 0.75rem 1rem;
  display: none;

  &.show {
    display: block;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.25rem;
`;

export default Help;
