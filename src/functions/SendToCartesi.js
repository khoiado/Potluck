async function sendToCartesi(recipes) {
    try {
      const response = await fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipes),  // Send the recipes as JSON
      });
  
      if (!response.ok) {
        throw new Error('Failed to send data to Cartesi');
      }
      console.log('Data sent to Cartesi machine successfully');
    } catch (error) {
      console.error('Error sending data to Cartesi machine:', error);
    }
  }
  