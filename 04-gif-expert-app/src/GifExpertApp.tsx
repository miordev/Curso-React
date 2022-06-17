import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categoryList, setCategoryList] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategoryList(['Valorant', ...categoryList]);
  };

  return (
    <>
      <h1>GifExpertApp 2</h1>

      <AddCategory />
      <button onClick={onAddCategory}>Add</button>

      <ol>
        {categoryList.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
