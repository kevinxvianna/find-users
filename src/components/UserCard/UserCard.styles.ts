import styled from 'styled-components';

export const UserCard = styled.div`
  padding: 12px;

  color: #e5e7eb;
  background-color: #4b5563;

  border-radius: 8px;
`;

export const HeaderSection = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 8.75fr;
  gap: 8px;
`;

export const BodySection = styled.div`
  margin-top: 24px;
`;

export const Text = styled.h3`
  font-size: 1.2rem;
`;

export const Name = styled.h1`
  font-size: 1.5rem;
`;

export const Username = styled.h2`
  font-size: 1rem;
`;

export const NameSection = styled.div`
  grid-row: 1;
  grid-column: 2;
`;

export const UserPhoto = styled.img`
  max-width: 50px;
  max-height: 50px;

  border-radius: 50%;
  grid-row: 1;
  grid-column: 1;
`;
