import React, { useMemo } from 'react';

import { UserItem } from '../UserItem/UserItem';
import * as S from './UserList.styles';
import { User } from '../../types';

type UserListProps = {
  users: User[] | undefined;
};

export const UserList: React.FC<UserListProps> = ({ users }) => {
  const RenderUsers = useMemo(() => {
    if (users?.length === 0 || !users) return null;
    return users?.map((user) => <UserItem key={user.id} user={user} />);
  }, [users]);

  if (users?.length === 0 || !users) return <h1>user not found</h1>;

  return (
    <S.Table aria-label="user-table">
      <S.TableHeader>
        <S.Column isRowHeader>Name</S.Column>
        <S.Column>E-mail</S.Column>
        <S.Column>Username</S.Column>
        <S.Column>Phone</S.Column>
        <S.Column>Company</S.Column>
        <S.Column>City</S.Column>
      </S.TableHeader>
      <S.TableBody>{RenderUsers}</S.TableBody>
    </S.Table>
  );
};
