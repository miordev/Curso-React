import { useEffect, useState } from 'react';

export const Message = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }: any) => {
      setCords({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>User already exists</h3>
      <div>{JSON.stringify(cords)}</div>
    </>
  );
};
