import styled from 'styled-components';
import {
  Row as ReactAriaRow,
  Cell as ReactAriaCell,
} from 'react-aria-components';

export const Row = styled(ReactAriaRow)`
  border-radius: 6px 6px 6px 6px;
  outline: none;
  cursor: default;
  font-size: 1.072rem;
  position: relative;
`;

export const Cell = styled(ReactAriaCell)`
  padding: 4px 8px;

  text-align: left;
  outline: none;
`;
