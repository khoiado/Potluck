import React from 'react';

const FeaturedRecipe = () => {
  return (
    <section className="featured-recipe">
      <h3>Suggested for you</h3>
      <div className="recipe-card">
        <img 
          src="../src/assets/svg/chicken.png"  // Path relative to the 'public' folder
          alt="Baked Chicken" 
          className="recipe-image"
        />
        <div className="recipe-details">
          <h4>Baked Chicken</h4>
          <p>Baked chicken is a popular, versatile dish where chicken is roasted in an oven until tender and golden.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipe;
