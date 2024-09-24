import React, { useEffect, useState } from 'react';
import * as S from './SearchSection.styles';
import { useSearchProvider } from '../../providers/SearchProvider';
import { useMediaQuery } from 'usehooks-ts';

type SearchSectionProps = {
  isCardView: boolean;
  setIsCardView: (viewType: boolean) => void;
};
export const SearchSection: React.FC<SearchSectionProps> = ({
  isCardView,
  setIsCardView,
}) => {
  const { handleSearch, hasSubmitted } = useSearchProvider();
  const [name, setName] = useState<string>('');

  const shouldShowClearButton = hasSubmitted;
  const shouldShowChangeViewButton = useMediaQuery('(min-width: 1040px)');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.get('user')) {
      setName(urlParams.get('user') || '');
    }
  }, []);

  const handleSearchClick = (name: string) => {
    handleSearch(name);
  };

  const handleClearSearchClick = () => {
    handleSearch('');
    setName('');
  };

  const handleChangeView = () => {
    setIsCardView(!isCardView);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick(name);
    }
  };

  return (
    <S.Container>
      <S.Title>Find users</S.Title>
      <S.InputSection>
        <S.SearchField>
          <S.Label>Search users by name</S.Label>
          <S.Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <S.SearchButton onPress={() => handleSearchClick(name)}>
            Search
          </S.SearchButton>

          {shouldShowClearButton ? (
            <S.ClearButton onPress={() => handleClearSearchClick()}>
              Clear
            </S.ClearButton>
          ) : null}
        </S.SearchField>

        {shouldShowChangeViewButton ? (
          <S.RightSection>
            <S.Button onPress={handleChangeView}>Change View</S.Button>
          </S.RightSection>
        ) : null}
      </S.InputSection>
    </S.Container>
  );
};
