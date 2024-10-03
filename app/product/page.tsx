import { AddToCart } from '@/components/AddToCart';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { fetchProduct } from '@/lib/fetchProduct';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  searchParams: {
    url: string;
  };
}
const ProductPage = async ({ searchParams: { url } }: Props) => {
  const product = await fetchProduct(url);
  if (!product) return notFound();
  return (
    <div className='flex w-full flex-col p-4 lg:flex-row lg:p-10'>
      <div className='hidden space-y-4 lg:inline'>
        {product.images.map((image, i) => (
          <Image
            key={image}
            src={image}
            alt={product.title + ' ' + i}
            width={90}
            height={90}
            className='rounded-sm border'
          />
        ))}
      </div>
      <Carousel
        opts={{ loop: true }}
        className='mx-auto mb-10 flex w-3/5 max-w-xl items-center self-start lg:mx-20 lg:mb-0 lg:w-full'
      >
        <CarouselContent>
          {product.images.map((image, i) => (
            <CarouselItem key={i}>
              <div className='p-1'>
                <div className='relative flex aspect-square items-center justify-center p-2'>
                  <Image
                    src={image}
                    alt={product.title + ' ' + i}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='w-full flex-1 space-y-5 rounded-md border p-5'>
        <h1 className='text-3xl font-bold'>{product.title}</h1>
        <div className='space-x-2'>
          {product.breadcrumbs.map((breadcrumb, i) => (
            <Badge
              key={breadcrumb + i}
              variant='outline'
              className={breadcrumb}
            >
              {breadcrumb}
            </Badge>
          ))}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: product.description }}
          className='py-5'
        />
        {product.rating && (
          <p className='text-sm text-yellow-500'>
            {product.rating.rating}★
            <span className='ml-2 text-gray-400'>
              {product.rating.count} reviews
            </span>
          </p>
        )}
        <p className='mt-2 text-2xl font-bold'>
          {product?.currency} {product?.price}
        </p>
        {/* Add Button */}
        <AddToCart product={product} />
        <hr />
        <h3 className='pt-10 text-xl font-bold'>Specification</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Specification</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.specifications.map((specification) => (
              <TableRow key={specification.key}>
                <TableCell className='font-medium'>
                  {specification.key}
                </TableCell>
                <TableCell>{specification.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductPage;
