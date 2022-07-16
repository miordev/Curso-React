import React from 'react';

export const ShowIncrement = React.memo(({ increment }: any) => {
  console.log('It was recreated');

  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Increment
    </button>
  );
});
