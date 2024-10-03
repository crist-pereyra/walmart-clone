import { Basket } from '@/components/Basket';
import { ShoppingCartIcon } from 'lucide-react';
import React from 'react';

const BasketPage = () => {
  return (
    <div className='mx-auto w-full max-w-7xl p-10'>
      <div className='flex items-center space-x-2'>
        <ShoppingCartIcon className='size-10' />
        <h1 className='text-3xl font-bold'>Your Cart</h1>
      </div>
      <p className='mb-5 mt-2'>
        Review the items in your cart and checkout when ready!
      </p>
      <Basket />
    </div>
  );
};

export default BasketPage;
