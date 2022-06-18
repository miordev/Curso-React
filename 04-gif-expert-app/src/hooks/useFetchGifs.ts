import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [gifList, setGifList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateGifList = async () => {
    const newGifList = await getGifs(category);
    setGifList(newGifList);
    setIsLoading(false);
  };
  useEffect(() => {
    updateGifList();
  }, []);

  return {
    gifList,
    isLoading
  }
}
