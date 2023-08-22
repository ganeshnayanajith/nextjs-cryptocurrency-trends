import axios from 'axios';

export const GET = async () => {
  try {
    // Define the API endpoint
    const apiUrl = 'https://api.coingecko.com/api/v3/search/trending';

    // Fetch data from the CoinGecko API using Axios
    const response = await axios.get(apiUrl);

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      const data = response.data.coins;

      const dataArray: any[] = [];

      data.forEach((item: any) => {
        const itemData = item.item;
        dataArray.push(itemData);
      });

      return new Response(JSON.stringify(dataArray), { status: 200 });
    } else {
      return new Response('Failed to fetch trending coins data', { status: response.status });
    }
  } catch (error) {
    console.error('Error fetching trending coins data:', error);
    return new Response('Internal server error', { status: 500 });
  }
};
