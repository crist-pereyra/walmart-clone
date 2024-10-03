'use client';
import { useCartStore } from '@/stores/cart.store';
import { Product } from '@/typings/productTypings';
import React from 'react';
import { Button } from './ui/button';

export const RemoveFromCart = ({ product }: { product: Product }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const handleRemove = () => {
    removeFromCart(product);
  };
  return (
    <Button className='bg-walmart hover:bg-walmart/50' onClick={handleRemove}>
      -
    </Button>
  );
};
