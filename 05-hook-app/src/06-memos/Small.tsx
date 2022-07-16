import React from 'react';

export const Small = React.memo(({ value }: any) => {
  console.log('It was recreated again');
  return <small>{value}</small>;
});
