import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  image?: string;
  className?: string;
}
export const GridOption = ({ title, image, className }: Props) => {
  return (
    <Link
      className={cn('grid-option relative', className)}
      href={{
        pathname: '/search',
        query: {
          q: title,
        },
      }}
    >
      <h2 className='text-xl font-bold'>{title}</h2>
      {image && (
        <Image
          src={image}
          alt={title}
          layout='fill'
          className='rounded-md object-cover opacity-20'
        />
      )}
    </Link>
  );
};
