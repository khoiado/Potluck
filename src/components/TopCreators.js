import React, { useState, useEffect } from 'react';

const TopCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    // Fetch creators when the component mounts
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    try {
      // Fetch top creators from the Supabase Edge function
      const response = await fetch('https://xhkzeoauowwygblxujmr.supabase.co/functions/v1/top_creators');
      const data = await response.json();
      setCreators(data);
    } catch (error) {
      console.error('Error fetching creators:', error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Top Creators</h2>
      <div className="flex flex-row gap-4 overflow-x-auto">
        {creators.map((creator) => (
          <div key={creator.id} className="flex flex-col items-center min-w-fit">
            <img
              src={creator.imageUrl || '/api/placeholder/100/100'}
              alt={creator.username}
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <span className="text-sm">{creator.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
