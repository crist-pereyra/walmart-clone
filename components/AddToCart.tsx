'use client';
import { useCartStore } from '@/stores/cart.store';
import { Product } from '@/typings/productTypings';
import { Button } from './ui/button';
import { RemoveFromCart } from './RemoveFromCart';

export const AddToCart = ({ product }: { product: Product }) => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const howManyInCart = cart.filter(
    (p) => p.meta.sku === product.meta.sku
  ).length;
  const handleAdd = () => {
    addToCart(product);
  };
  if (howManyInCart > 0) {
    return (
      <div className='flex items-center space-x-5'>
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button className='bg-walmart hover:bg-walmart/50' onClick={handleAdd}>
          +
        </Button>
      </div>
    );
  }
  return (
    <Button className='bg-walmart hover:bg-walmart/50' onClick={handleAdd}>
      Add to cart
    </Button>
  );
};
