import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categoryList, setCategoryList] = useState(['One Punch']);

  const onAddCategory = (newCategory: string): void => {
    if (!categoryList.includes(newCategory)) {
      setCategoryList([newCategory, ...categoryList]);
    }
  };

  return (
    <>
      <h1>GifExpertApp 2</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categoryList.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
