import React, { useEffect, useState } from 'react';
import { supabase } from '../api/SupabaseClient';
import { useAuthInfo, useLogoutFunction } from '@propelauth/react';
import Navbar from '../components/Navbar';
import TopCreators from '../components/TopCreators';
import FeaturedRecipe from '../components/FeaturedRecipe';
import RecipeCategory from '../components/RecipeCategory';

const HomeScreen = () => {
  const authInfo = useAuthInfo();
  const logout = useLogoutFunction();
  const [recipes, setRecipes] = useState([]);

  // Separate recipes into categories (you can customize this based on your recipe data)
  const creamyPastaRecipes = recipes.filter((recipe) => recipe.category === 'Creamy Pastas');
  const dessertRecipes = recipes.filter((recipe) => recipe.category === 'Desserts');

  useEffect(() => {
    const fetchRecipes = async () => {
      if (authInfo.isLoggedIn) {
        const { data: recipes, error } = await supabase
          .from('recipes')
          .select('*');
        
        if (error) {
          console.error(error);
        } else {
          setRecipes(recipes);
        }
      }
    };

    fetchRecipes();
  }, [authInfo.isLoggedIn]);

  return (
    <div>
      {authInfo.isLoggedIn ? (
        <>
          <Navbar />
          <h2>Welcome, {authInfo.user.email}</h2>
          <TopCreators />
          <FeaturedRecipe />
          <button onClick={logout}>Log Out</button>
          
          {/* Recipe Categories */}
          <h3>Recipes:</h3>
          <RecipeCategory category="Creamy Pastas" recipes={creamyPastaRecipes} />
          <RecipeCategory category="Desserts" recipes={dessertRecipes} />
          
        </>
      ) : (
        <h2>Please log in to view the content</h2>
      )}
    </div>
  );
};

export default HomeScreen;
