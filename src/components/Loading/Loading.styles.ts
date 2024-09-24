import styled, { keyframes } from 'styled-components';
import {
  ProgressBar as ReactAriaProgressBar,
  Label as ReactAriaLabel,
} from 'react-aria-components';

export const Container = styled.div`
  width: 250px;
  height: 40px;
`;

const loadingAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(250px);
  }
`;

export const ProgressBar = styled(ReactAriaProgressBar)`
  display: grid;
  grid-template-areas:
    'label value'
    'bar bar';
  grid-template-columns: 1fr auto;
  gap: 4px;
  width: 250px;
  color: #4b5563;

  .fill {
    background: #111827;
    height: 100%;
  }

  &:not([aria-valuenow]) {
    .fill {
      width: 120px;
      border-radius: inherit;
      animation: ${loadingAnimation} 1.5s infinite ease-in-out;
      will-change: transform;
    }
  }
`;
export const Label = styled(ReactAriaLabel)`
  font-weight: 500;
  text-align: center;
`;

export const Bar = styled.div`
  grid-area: bar;
  box-shadow: inset 0px 0px 0px 1px #9ca3af;
  forced-color-adjust: none;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  will-change: transform;
`;
