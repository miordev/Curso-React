import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, decrement, increment, reset } = useCounter();

  return (
    <>
      <div>Counter With Custom Hook {counter}</div>

      <hr />

      <button onClick={() => increment(2)} className="btn btn-primary">
        +2
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => decrement(2)} className="btn btn-primary">
        -2
      </button>
    </>
  );
};
