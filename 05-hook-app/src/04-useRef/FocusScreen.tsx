import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>();

  const onFocus = () => {
    inputRef.current?.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} type="text" placeholder="user name" className="form-control" />

      <button onClick={onFocus} className="btn btn-primary mt-2">
        Focus
      </button>
    </>
  );
};
