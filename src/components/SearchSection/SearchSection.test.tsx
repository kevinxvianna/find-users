import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { SearchSection } from './SearchSection';
import { useSearchProvider } from '../../providers/SearchProvider';
import { useMediaQuery } from 'usehooks-ts';
import '@testing-library/jest-dom';

jest.mock('../../providers/SearchProvider');
jest.mock('usehooks-ts');

describe('SearchSection', () => {
  const mockHandleSearch = jest.fn();
  const mockSetIsCardView = jest.fn();

  beforeEach(() => {
    (useSearchProvider as jest.Mock).mockReturnValue({
      handleSearch: mockHandleSearch,
      hasSubmitted: false,
    });
    (useMediaQuery as jest.Mock).mockReturnValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component', () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchSection isCardView={false} setIsCardView={mockSetIsCardView} />,
    );

    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();
  });

  it('should call handleSearch when search button is clicked', () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchSection isCardView={false} setIsCardView={mockSetIsCardView} />,
    );

    const input = getByPlaceholderText('Name');
    fireEvent.change(input, { target: { value: 'John' } });

    const searchButton = getByText('Search');
    fireEvent.click(searchButton);

    expect(mockHandleSearch).toHaveBeenCalledWith('John');
  });

  it('should call setIsCardView when change view button is clicked', () => {
    const { getByText } = render(
      <SearchSection isCardView={false} setIsCardView={mockSetIsCardView} />,
    );

    const changeViewButton = getByText('Change View');
    fireEvent.click(changeViewButton);

    expect(mockSetIsCardView).toHaveBeenCalledWith(true);
  });

  it('should call handleSearch with empty string when clear button is clicked', () => {
    (useSearchProvider as jest.Mock).mockReturnValue({
      handleSearch: mockHandleSearch,
      hasSubmitted: true,
    });

    const { getByText } = render(
      <SearchSection isCardView={false} setIsCardView={mockSetIsCardView} />,
    );

    const clearButton = getByText('Clear');
    fireEvent.click(clearButton);

    expect(mockHandleSearch).toHaveBeenCalledWith('');
  });

  it('should call handleSearch when Enter key is pressed', () => {
    const { getByPlaceholderText } = render(
      <SearchSection isCardView={false} setIsCardView={mockSetIsCardView} />,
    );

    const input = getByPlaceholderText('Name');
    fireEvent.change(input, { target: { value: 'John' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockHandleSearch).toHaveBeenCalledWith('John');
  });
});
