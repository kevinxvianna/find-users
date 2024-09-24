import React from 'react';

import * as S from './UserItem.styles';
import { User } from '../../types';

type UserItemProps = {
  user: User;
};

export const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <S.Row>
      <S.Cell>{user?.name}</S.Cell>
      <S.Cell>{user?.email}</S.Cell>
      <S.Cell>{user?.username}</S.Cell>
      <S.Cell>{user?.phone}</S.Cell>
      <S.Cell>{user?.company.name}</S.Cell>
      <S.Cell>{user?.address.city}</S.Cell>
    </S.Row>
  );
};
