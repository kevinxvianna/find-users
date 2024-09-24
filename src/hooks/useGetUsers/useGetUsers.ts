import { useQueryClient } from 'react-query';
import { FETCH_USERS_KEY } from '../../constants';
import { User } from '../../types';

export const useGetUsers = (name: string) => {
  const queryClient = useQueryClient();

  const users = queryClient.getQueryData(FETCH_USERS_KEY) as User[] | undefined;

  if (!name) return users;

  const foundUsers = users?.filter((user: User) => user.name.includes(name));
  return foundUsers;
};
