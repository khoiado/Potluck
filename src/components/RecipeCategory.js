import React from 'react';
import RecipeCard from './RecipeCard'; // Import the RecipeCard component

//import './RecipeCategory.css'; // For component-specific CSS if needed

const RecipeCategory = ({ category, recipes }) => {
  return (
    <section className="recipe-category">
      <h2>{category}</h2>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} title={recipe.title} time={recipe.time} calories={recipe.calories} />
        ))}
      </div>
    </section>
  );
};

export default RecipeCategory;
