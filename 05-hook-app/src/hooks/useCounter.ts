import { useState } from 'react';

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue)

  const increment = (value: number = 1) => {
    setCounter(counter + value);
  }

  const decrement = (value: number = 1) => {
    if (counter - value >= 0) {
      setCounter(counter - value);
    }
  }

  const reset = () => {
    setCounter(initialValue);
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}
