import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { useFetchUsers } from '../../hooks/useFetchUsers/useFetchUsers';
import { useGetUsers } from '../../hooks/useGetUsers/useGetUsers';
import { useSearchProvider } from '../../providers/SearchProvider';
import { useMediaQuery } from 'usehooks-ts';

jest.mock('../../hooks/useFetchUsers/useFetchUsers');
jest.mock('../../hooks/useGetUsers/useGetUsers');
jest.mock('../../providers/SearchProvider');
jest.mock('usehooks-ts');

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockedUser = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
  ];

  it('renders loading state', () => {
    (useFetchUsers as jest.Mock).mockReturnValue({
      isLoading: true,
      isError: false,
    });
    (useSearchProvider as jest.Mock).mockReturnValue({ searchedName: '' });
    (useGetUsers as jest.Mock).mockReturnValue([]);
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(<Home />);

    expect(screen.getByLabelText('loading-progressbar')).toBeInTheDocument();
  });

  it('renders error state', () => {
    (useFetchUsers as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: true,
    });
    (useSearchProvider as jest.Mock).mockReturnValue({ searchedName: '' });
    (useGetUsers as jest.Mock).mockReturnValue([]);
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(<Home />);

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(screen.getByText('Try again later.')).toBeInTheDocument();
  });

  it('renders user list in list view', () => {
    (useFetchUsers as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
    });
    (useSearchProvider as jest.Mock).mockReturnValue({ searchedName: '' });
    (useGetUsers as jest.Mock).mockReturnValue(mockedUser);
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(<Home />);

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByLabelText('users-table')).toBeInTheDocument();
  });

  it('renders user list in card view', () => {
    (useFetchUsers as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
    });
    (useSearchProvider as jest.Mock).mockReturnValue({ searchedName: '' });
    (useGetUsers as jest.Mock).mockReturnValue(mockedUser);
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    render(<Home />);

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByLabelText('user-grid')).toBeInTheDocument();
  });
});
