import React, {
  createContext,
  useEffect,
  useContext,
  ReactNode,
  useState,
} from 'react';

type SearchContextData = {
  searchedName: string;
  handleSearch: (name: string) => void;
  hasSubmitted: boolean;
};

type SearchProviderProps = {
  children: ReactNode;
};

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchedName, setSearchedName] = useState<string>('');
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  useEffect(() => {
    if (urlParams.get('user')) {
      setSearchedName(urlParams.get('user') || '');
      setHasSubmitted(true);
    }
  }, []);

  const handleSearch = (name: string) => {
    setSearchedName(name);
    setHasSubmitted(true);

    if (name !== '') {
      window.history.pushState({}, '', `/?user=${name}`);
      return;
    }

    window.history.pushState({}, '', '/');
    setHasSubmitted(false);
  };

  return (
    <SearchContext.Provider
      value={{ searchedName, handleSearch, hasSubmitted }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchProvider = () => {
  const context = useContext(SearchContext);

  return context;
};
