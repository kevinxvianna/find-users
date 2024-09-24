import styled from 'styled-components';
import {
  Table as ReactAriaTable,
  TableHeader as ReactAriaTableHeader,
  Column as ReactAriaColumn,
  TableBody as ReactAriaTableBody,
} from 'react-aria-components';

export const Table = styled(ReactAriaTable)`
  width: 100%;
  padding: 0.286rem;
  color: #e5e7eb;
  background-color: #4b5563;
  border-spacing: 0;
  align-self: start;
  word-break: break-word;

  border-radius: 8px;
  outline: none;
  min-height: 100px;
  max-width: 100%;
  forced-color-adjust: none;
`;

export const TableHeader = styled(ReactAriaTableHeader)`
  border-radius: 6px;
  width: 100%;

  &:after {
    content: '';
    display: table-row;
    height: 2px;
  }

  & tr:last-child {
    border-bottom: 1px solid #9ca3af;
    cursor: default;
  }
`;

export const Column = styled(ReactAriaColumn)`
  border-radius: 6px;
  outline: 1px;
`;

export const TableBody = styled(ReactAriaTableBody)`
  border-radius: 6px;
  width: 100%;

  :hover {
    background-color: #6b7280;
  }
`;
