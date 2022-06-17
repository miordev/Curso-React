import { useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const onInputSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Submit: ', event);
  };

  return (
    <form onSubmit={onInputSubmit}>
      <input type="text" placeholder="Search Gifs" value={inputValue} onChange={onInputChange} />
    </form>
  );
};
