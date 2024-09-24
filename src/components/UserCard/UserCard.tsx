import React from 'react';

import * as S from './UserCard.styles';
import { User } from '../../types';
import { BASE_IMAGE_URL } from '../../constants';

type UserCardProps = {
  user: User;
};

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <S.UserCard>
      <S.HeaderSection>
        <S.UserPhoto src={BASE_IMAGE_URL} />
        <S.NameSection>
          <S.Name>{user?.name}</S.Name>
          <S.Username>{user?.username}</S.Username>
        </S.NameSection>
      </S.HeaderSection>

      <S.BodySection>
        <S.Text>
          <strong>Email:</strong> {user?.email}
        </S.Text>
        <S.Text>
          <strong>Phone:</strong> {user?.phone}
        </S.Text>
      </S.BodySection>
    </S.UserCard>
  );
};
