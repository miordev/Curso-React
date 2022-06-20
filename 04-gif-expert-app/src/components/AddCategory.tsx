import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }: any) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const onInputSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (inputValue.trim().length > 1) {
      onNewCategory(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={onInputSubmit} aria-label="form">
      <input type="text" placeholder="Search Gifs" value={inputValue} onChange={onInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
