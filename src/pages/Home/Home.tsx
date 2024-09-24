import React, { useEffect, useState } from 'react';
import { useFetchUsers } from '../../hooks/useFetchUsers/useFetchUsers';
import { useGetUsers } from '../../hooks/useGetUsers/useGetUsers';
import { SearchSection } from '../../components/SearchSection';
import * as S from './Home.styles';
import { UserList } from '../../components/UserList';
import { useSearchProvider } from '../../providers/SearchProvider';
import Loading from '../../components/Loading/Loading';
import { UserGrid } from '../../components/UserGrid';
import { useMediaQuery } from 'usehooks-ts';

export const Home: React.FC = () => {
  const [isCardView, setIsCardView] = useState<boolean>(false);
  const { isError, isLoading } = useFetchUsers();
  const { searchedName } = useSearchProvider();

  const users = useGetUsers(searchedName);

  const shouldChangeToCardView = useMediaQuery('(max-width: 1040px)');

  useEffect(() => {
    if (shouldChangeToCardView) {
      setIsCardView(true);
    }
  }, [shouldChangeToCardView]);

  if (isLoading) {
    return (
      <S.SecondaryContainer>
        <Loading />
      </S.SecondaryContainer>
    );
  }

  if (isError) {
    return (
      <S.SecondaryContainer>
        <h1>Something went wrong.</h1>
        <h1>Try again later.</h1>
      </S.SecondaryContainer>
    );
  }

  return (
    <S.Container>
      <SearchSection isCardView={isCardView} setIsCardView={setIsCardView} />
      {isCardView ? <UserGrid users={users} /> : <UserList users={users} />}
    </S.Container>
  );
};
