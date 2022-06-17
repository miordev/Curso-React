import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }: any) => {
  const [gifList, setGifList] = useState<any[]>([]);

  const updateGifList = async () => {
    const newGifList = await getGifs(category);
    setGifList(newGifList);
  };

  useEffect(() => {
    updateGifList();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {gifList.map((gif: any) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
