import { useCounter } from '../hooks';
import { useMemo, useState } from 'react';

const heavyStuff = (numberOfRepetitions: number) => {
  for (let i = 0; i < numberOfRepetitions; i++) {
    console.log('here we go');
  }

  return `${numberOfRepetitions} iterations done`;
};

export const MemoHook = () => {
  const { counter, increment, decrement } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => decrement()}>
        -1
      </button>

      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Hide/Show {JSON.stringify(show)}
      </button>
    </>
  );
};
