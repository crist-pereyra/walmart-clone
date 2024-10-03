import { Product } from '@/components/Product';
import { fetchSearch } from '@/lib/fetchSearch';
import React from 'react';
interface Props {
  searchParams: {
    q: string;
  };
}
const SearchPage = async ({ searchParams: { q } }: Props) => {
  const results = await fetchSearch(q);
  // console.log(results);
  return (
    <div className='p-10'>
      <h1 className='mb-2 text-3xl font-bold'>Result for {q}</h1>
      <h2 className='mb-5 text-gray-400'>
        ({results?.content.total_results} results)
      </h2>
      <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {results?.content.organic.map((product) => (
          <li key={product.product_id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
