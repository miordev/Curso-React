import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // };

  const incrementFather = useCallback((increment: number) => {
    setCounter((value) => value + increment);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
