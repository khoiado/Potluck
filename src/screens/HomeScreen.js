import React, { useEffect, useState } from 'react';
import { supabase } from '../api/SupabaseClient';
import { useAuthInfo, useLogoutFunction } from '@propelauth/react';
import TopCreators from '../components/TopCreators';

const HomeScreen = () => {
  const authInfo = useAuthInfo();
  const logout = useLogoutFunction();
  const [recipes, setRecipes] = useState([]);

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
          <h2>Welcome, {authInfo.user.email}</h2>
          <TopCreators/>
          <button onClick={logout}>Log Out</button>
          <h3>Recipes:</h3>
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <h4>{recipe.name}</h4>
            </div>
          ))}
        </>
      ) : (
        <h2>Please log in to view the content</h2>
      )}
    </div>
  );
};

export default HomeScreen;
