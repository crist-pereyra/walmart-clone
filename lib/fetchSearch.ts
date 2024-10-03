import { Result } from '@/typings/searchTypings';

export const fetchSearch = async (searchTerm: string) => {
  const username = process.env.OXYLABS_USERNAME;
  const password = process.env.OXYLABS_PASSWORD;

  const newUrl = new URL(`https://www.walmart.com/search?q=${searchTerm}`);
  const body = {
    source: 'universal_ecommerce',
    url: newUrl.toString(),
    geo_location: 'United States',
    parse: true,
  };
  const response = await fetch('https://realtime.oxylabs.io/v1/queries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
    },
    body: JSON.stringify(body),
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });
  const data = await response.json();
  if (data.results.length === 0) return;
  const result: Result = data.results[0];
  return result;
};

// https://api.walmartlabs.com/v2/search
