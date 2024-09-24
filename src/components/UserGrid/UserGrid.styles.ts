import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 64px;
  gap: 16px;

  display: grid;
  grid-template-columns: 3.3fr 3.3fr 3.3fr;

  @media (max-width: 1024px) {
    grid-template-columns: 5fr 5fr;
  }

  @media (max-width: 742px) {
    grid-template-columns: 10fr;
  }
`;
