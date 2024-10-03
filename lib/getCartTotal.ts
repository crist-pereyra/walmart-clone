import { Product } from '@/typings/productTypings';

export const getCartTotal = (cart: Product[]) => {
  const total = cart.reduce((total, product) => total + product.price, 0);
  return cart.length === 0
    ? '0.00'
    : `${cart[0]?.currency} ${total.toFixed(2)}`;
};
