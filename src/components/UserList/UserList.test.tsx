import React from 'react';
import { screen, render } from '@testing-library/react';

import { UserList } from './UserList';

describe('UserList', () => {
  it('should render a table with one user', () => {
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

    render(<UserList users={mockedUser} />);

    expect(screen.getByLabelText('users-table')).toBeInTheDocument();
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Sincere@april.biz')).toBeInTheDocument();
    expect(screen.getByText('Bret')).toBeInTheDocument();
    expect(screen.getByText('1-770-736-8031 x56442')).toBeInTheDocument();
    expect(screen.getByText('Romaguera-Crona')).toBeInTheDocument();
    expect(screen.getByText('Gwenborough')).toBeInTheDocument();
  });

  it('should render "user not found" when no users are provided', () => {
    render(<UserList users={[]} />);

    expect(screen.getByText('user not found')).toBeInTheDocument();
  });

  it('should render "user not found" when users is undefined', () => {
    render(<UserList users={undefined} />);

    expect(screen.getByText('user not found')).toBeInTheDocument();
  });
});
