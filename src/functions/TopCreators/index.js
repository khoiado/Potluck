import express from 'express';

const app = express();
const port = 3000;

app.get('/api/top-creators', async (req, res) => {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch top creators based on votes
    const { data, error } = await supabase
      .from('users')
      .select('id, username, email, votes(vote_value)')
      .order('vote_value', { foreignTable: 'votes', ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
