import styled from 'styled-components';
import {
  Button as ReactAriaButton,
  Input as ReactAriaInput,
  SearchField as ReactAriaSearchField,
  Label as ReactAriaLabel,
} from 'react-aria-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;

  padding: 24px;

  display: flex;
  flex-direction: column;
`;

export const InputSection = styled.div`
  margin-top: 12px;
  display: flex;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Label = styled(ReactAriaLabel)`
  color: #6b7280;
`;

export const Input = styled(ReactAriaInput)`
  width: 200px;
  height: 32px;
  padding: 8px;

  border: 1px solid #22c55e;
  border-radius: 4px;
  grid-row: 2;

  &:focus {
    outline: none;
  }

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
  }
`;

export const SearchField = styled(ReactAriaSearchField)`
  display: grid;
  grid-template-rows: 5fr 5fr
  align-items: center;
  width: fit-content;
  color: #000;

`;

export const SearchButton = styled(ReactAriaButton)`
  margin-left: 4px;
  padding: 4px 8px;

  grid-row: 2;

  font-weight: 400;
  color: #fff;

  border: 1px solid #22c55e;
  border-radius: 4px;

  background-color: #16a34a;
`;

export const ClearButton = styled(ReactAriaButton)`
  margin-left: 4px;
  padding: 4px 8px;

  grid-row: 2;

  color: #fff;
  font-weight: 400;

  border: 1px solid #ef4444;
  border-radius: 4px;

  background-color: #f87171;
`;

export const Button = styled(ReactAriaButton)`
  height: 40px;
  margin-left: 4px;
  padding: 4px 8px;

  font-weight: 400;
  color: #fff;

  border: 1px solid #ef4444;
  border-radius: 4px;
  background-color: #f87171;
`;

export const RightSection = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
