import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { FETCH_USERS_KEY } from '../../constants';

import { User } from '../../types';

export type UseFetchUsersResponseType = User[];

const API_URL = 'https://jsonplaceholder.typicode.com';

export const useFetchUsers = (): UseQueryResult<
  UseFetchUsersResponseType,
  undefined
> => {
  return useQuery(
    FETCH_USERS_KEY,
    async () => {
      return await axios
        .get(`${API_URL}/users`)
        .then((response) => response.data);
    },
    {
      staleTime: 1000 * 60 * 10,
      retry: 3,
    },
  );
};
