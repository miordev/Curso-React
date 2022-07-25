import { useState } from 'react';

import { UserContext } from './UserContext';

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState();

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
