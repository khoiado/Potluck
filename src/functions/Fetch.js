useEffect(() => {
  async function fetchAndSendRecipes() {
    const query = `
      query FetchRecipes {
        recipes {
          id
          name
          ingredients
          instructions
          votes
          user_id
          created_at
          updated_at
        }
      }
    `;

    try {
      const response = await fetch('https://your-supabase-url/graphql/v1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.REACT_APP_SUPABASE_KEY,
        },
        body: JSON.stringify({ query }),
      });

      const json = await response.json();
      const fetchedRecipes = json.data.recipes;
      setRecipes(fetchedRecipes);  // Set the fetched recipes in state

      // Send the fetched recipes to Cartesi
      await sendToCartesi(fetchedRecipes);
    } catch (error) {
      console.error('Error fetching or sending recipes:', error);
    }

    setLoading(false);
  }

  fetchAndSendRecipes();
}, []);
