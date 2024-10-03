import { Product } from '@/typings/productTypings';

export const groupBySKU = (products: Product[]): Record<string, Product[]> => {
  return products?.reduce(
    (acc: Record<string, Product[]>, product: Product) => {
      if (!acc[product.meta.sku]) {
        acc[product.meta.sku] = [];
      }
      acc[product.meta.sku].push(product);
      return acc;
    },
    {}
  );
};
