import { useEffect, useState } from 'react';
import { Message } from './Message';
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'miguel',
    email: 'miguel@gmail.com',
  });

  const { username, email } = formState;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called');
  }, []);

  useEffect(() => {
    // console.log('formState called');
  }, [formState]);

  useEffect(() => {
    // console.log('email  called');
  }, [email]);

  return (
    <>
      <div>Simple Form</div>
      <hr />

      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        name="email"
        placeholder="email"
        value={email}
        onChange={onInputChange}
      />

      {username === 'miguel2' && <Message />}
    </>
  );
};
