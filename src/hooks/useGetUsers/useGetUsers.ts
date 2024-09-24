import { useQueryClient } from 'react-query';
import { FETCH_USERS_KEY } from '../../constants';
import { User } from '../../types';

export const useGetUsers = (name: string): User[] | undefined => {
  const queryClient = useQueryClient();
  const regex = new RegExp(name, 'i');

  const users = queryClient.getQueryData(FETCH_USERS_KEY) as User[] | undefined;

  if (!name) return users;

  const foundUsers = users?.filter((user: User) => regex.test(user.name));
  return foundUsers;
};
