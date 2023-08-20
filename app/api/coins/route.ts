import axios from 'axios';

export const GET = async () => {
  try {
    // Define the API endpoint
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/list';

    // Fetch data from the CoinGecko API using Axios
    const response = await axios.get(apiUrl);

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      const data = response.data;
      return new Response(JSON.stringify(data), { status: 200 });
    } else {
      return new Response('Failed to fetch data', { status: response.status });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response('Internal server error', { status: 500 });
  }
};
