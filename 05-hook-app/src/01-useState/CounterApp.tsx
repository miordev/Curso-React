import { useState } from 'react';
export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <div>Counter1: {counter1}</div>
      <div>Counter2: {counter2}</div>
      <div>Counter3: {counter3}</div>
      <hr />
      <button
        className="btn"
        onClick={() =>
          setState({
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
