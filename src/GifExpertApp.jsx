import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = ({}) => {
  const [categories, setCategories] = useState(['Jujutsu Kaisen']);

  const onAddCategory = (newCategory) => {
    if (
      categories.some(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* {Title } */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Gif List */}
      <div className="gifs">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>

      {/* Gif item */}
    </>
  );
};
