import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserGrid } from './UserGrid';

describe('UserGrid', () => {
  const mockedUsers = [
    {
      id: 1,
      name: 'Leanne Graham 1',
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
    {
      id: 2,
      name: 'Leanne Graham 2',
      username: 'Bret 2',
      email: 'Sincere@april.biz 2',
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
      phone: '1-770-736-8031 x56442 2',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
  ];

  it('renders without crashing', () => {
    render(<UserGrid users={mockedUsers} />);
    expect(screen.getByLabelText('user-grid')).toBeInTheDocument();
  });

  it('renders the correct number of UserCard components', () => {
    render(<UserGrid users={mockedUsers} />);
    const userCards = screen.getAllByLabelText('user-card');
    expect(userCards.length).toBe(mockedUsers.length);
  });

  it('renders the correct number of UserCard components with right data', () => {
    render(<UserGrid users={mockedUsers} />);
    const userCards = screen.getAllByLabelText('user-card');
    expect(userCards.length).toBe(mockedUsers.length);

    //first user
    expect(screen.getByText(mockedUsers[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockedUsers[0].username)).toBeInTheDocument();
    expect(screen.getByText(mockedUsers[0].email)).toBeInTheDocument();
    expect(screen.getByText(mockedUsers[0].phone)).toBeInTheDocument();

    //second user
    expect(screen.getByText(mockedUsers[1].name)).toBeInTheDocument();
    expect(screen.getByText(mockedUsers[1].username)).toBeInTheDocument();
    expect(screen.getByText(mockedUsers[1].email)).toBeInTheDocument();
    expect(screen.getByText(mockedUsers[1].phone)).toBeInTheDocument();
  });

  it('renders no UserCard components when users is undefined', () => {
    render(<UserGrid users={undefined} />);
    const userCard = screen.queryByLabelText('user-card');
    expect(userCard).toBeNull();
    expect(screen.getByText('user not found')).toBeInTheDocument();
  });

  it('renders no UserCard components when users is an empty array', () => {
    render(<UserGrid users={[]} />);
    const userCard = screen.queryByLabelText('user-card');
    expect(userCard).toBeNull();
    expect(screen.getByText('user not found')).toBeInTheDocument();
  });
});
