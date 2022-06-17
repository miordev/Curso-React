import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }: any) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2 data-testid="test-counter">{counter}</h2>
      <button aria-label="increase-btn" onClick={handleAdd}>
        +1
      </button>
      <button aria-label="decrease-btn" onClick={handleSubtract}>
        -1
      </button>
      <button aria-label="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
