import { useState, useCallback } from 'react';
import { Child } from './Child';

export const Father = () => {
  const numberList = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const increment = useCallback((number: number) => {
    setValue((val) => val + number);
  }, []);

  return (
    <div>
      <h1>Father</h1>
      <p> Total: {value} </p>

      <hr />

      {numberList.map((n) => (
        <Child key={n} number={n} increment={increment} />
      ))}
    </div>
  );
};
