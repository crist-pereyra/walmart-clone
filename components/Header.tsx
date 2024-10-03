'use client';
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/logo.svg';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/stores/cart.store';
import { getCartTotal } from '@/lib/getCartTotal';

export const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };
  return (
    <header className='flex flex-col items-center space-x-5 bg-walmart px-10 py-7 md:flex-row'>
      <Link href='/' className='mb-5 md:mb-0'>
        <Image src={logo} alt='logo' width={150} height={150} />
      </Link>
      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-1 items-center rounded-full bg-white'
      >
        <input
          type='text'
          name='input'
          placeholder='Search Everything...'
          className='flex-1 rounded-l-full px-4 text-black outline-none placeholder:text-sm'
        />
        <button type='submit'>
          <Search className='size-10 cursor-pointer rounded-full bg-yellow-400 px-2' />
        </button>
      </form>
      <div className='mt-5 flex space-x-5 md:mt-0'>
        <Link
          href='/'
          className='hidden items-center space-x-2 text-sm font-bold text-white xl:flex'
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href='/'
          className='hidden items-center space-x-2 text-sm font-bold text-white xl:flex'
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href='/'
          className='flex items-center space-x-2 text-sm font-bold text-white'
        >
          <Heart size={20} />
          <div>
            <p className='text-xs font-extralight'>Reorder</p>
            <p>My Items</p>
          </div>
        </Link>
        <Link
          href='/'
          className='flex items-center space-x-2 text-sm font-bold text-white'
        >
          <User size={20} />
          <div>
            <p className='text-xs font-extralight'>Sign In</p>
            <p>Accounts</p>
          </div>
        </Link>
        <Link
          href='/basket'
          className='flex items-center space-x-2 text-sm font-bold text-white'
        >
          <ShoppingCart size={20} />
          <div>
            <p className='text-xs font-extralight'>
              {cart.length > 0 ? `${cart.length} items` : 'No items'}
            </p>
            <p>{total}</p>
          </div>
        </Link>
      </div>
    </header>
  );
};
