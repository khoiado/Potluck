import React from 'react';
//import './RecipeCard.css'; // For component-specific CSS if needed

const RecipeCard = ({ title, time, calories }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">{/* Add image SVG here */}</div>
      <div className="recipe-info">
        <h4>{title}</h4>
        <p>{time}</p>
        <p>{calories}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
