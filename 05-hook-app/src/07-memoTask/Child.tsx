import React from 'react';

export const Child = React.memo(({ number, increment }: any) => {
  console.log('It was recreated');

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(number)}>
      {number}
    </button>
  );
});
