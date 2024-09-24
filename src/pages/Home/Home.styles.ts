import styled from 'styled-components';
import { ProgressBar as ReactAriaProgressBar } from 'react-aria-components';

export const Container = styled.div`
  height: 100vh;

  margin: 0px auto;
  padding: 80px;
  padding-top: 32px;

  display: flex;
  flex-direction: column;

  @media (max-width: 767.98px) {
    padding: 12px;
  }
`;

export const SecondaryContainer = styled.div`
  height: 100vh;

  margin: 0px auto;
  padding: 80px;
  padding-top: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 767.98px) {
    padding: 12px;
  }
`;

export const Loading = styled(ReactAriaProgressBar)`
  width: 250px;
  gap: 4px;

  display: grid;
  grid-template-columns: 1fr auto;

  .value {
    grid-area: value;
  }

  .bar {
    grid-area: bar;
    forced-color-adjust: none;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    will-change: transform;
  }

  .fill {
    background-color: #000;
    height: 100%;
  }
`;
