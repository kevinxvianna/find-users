import React, { useMemo } from 'react';
import { User } from '../../types';
import { UserCard } from '../UserCard';
import * as S from './UserGrid.styles';

interface UserGridProps {
  users: User[] | undefined;
}

export const UserGrid: React.FC<UserGridProps> = ({ users }) => {
  const RenderCards = useMemo(() => {
    if (users?.length === 0 || !users) return null;
    return users?.map((user) => <UserCard key={user.id} user={user} />);
  }, [users]);
  return <S.Container>{RenderCards}</S.Container>;
};
