import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchProvider, useSearchProvider } from './SearchProvider';

const TestComponent = () => {
  const { searchedName, handleSearch, hasSubmitted } = useSearchProvider();

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <p data-testid="searched-name">{searchedName}</p>
      <p data-testid="has-submitted">{hasSubmitted ? 'true' : 'false'}</p>
    </div>
  );
};

describe('SearchProvider', () => {
  it('should update searchedName and hasSubmitted when handleSearch is called', () => {
    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>,
    );

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'John' } });

    expect(screen.getByTestId('searched-name').textContent).toBe('John');
    expect(screen.getByTestId('has-submitted').textContent).toBe('true');
  });

  it('should update the URL when handleSearch is called with a non-empty string', () => {
    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>,
    );

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'John' } });

    expect(window.location.search).toBe('?user=John');
  });

  it('should reset the URL when handleSearch is called with an empty string', () => {
    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>,
    );

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'John' } });
    fireEvent.change(input, { target: { value: '' } });

    expect(window.location.search).toBe('');
    expect(screen.getByTestId('has-submitted').textContent).toBe('false');
  });

  it('should initialize searchedName and hasSubmitted from URL parameters', () => {
    window.history.pushState({}, '', '/?user=Jane');

    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>,
    );

    expect(screen.getByTestId('searched-name').textContent).toBe('Jane');
    expect(screen.getByTestId('has-submitted').textContent).toBe('true');
  });
});
