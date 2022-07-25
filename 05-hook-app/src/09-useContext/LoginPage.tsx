import { useContext } from 'react';

import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext<any>(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 123,
            name: 'Miguel',
            email: 'miguel@gmail.com',
          })
        }
      >
        Initialize user
      </button>
    </>
  );
};
