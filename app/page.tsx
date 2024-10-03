import { GridOption } from '@/components/GridOption';

export default function Home() {
  return (
    <main className='flex-1'>
      <div className='m-6 grid grid-flow-row-dense grid-cols-1 gap-6 md:grid-cols-4'>
        <GridOption
          title='Sweet gifts for less'
          image='https://links.papareact.com/1dy'
          className='h-full bg-pink-200 md:h-32'
        />
        <GridOption
          title='Shop Wardrobe'
          image='https://links.papareact.com/8ko'
          className='col-span-2 row-span-2 bg-blue-100'
        />
        <GridOption
          title='Shop Home'
          image='https://links.papareact.com/szu'
          className='row-span-2 bg-pink-200'
        />
        <GridOption
          title='Shop Electronics'
          image='https://links.papareact.com/n7r'
          className='h-64 bg-yellow-100'
        />
        <GridOption
          title='Shop Toys'
          image='https://links.papareact.com/pj2'
          className='col-span-2 h-64 bg-green-100'
        />
        <GridOption
          title='All you need for Match Day'
          image='https://links.papareact.com/m8e'
          className='col-span-2 row-span-2 bg-red-100'
        />
        <GridOption
          title='Shop Gadgets'
          image='https://links.papareact.com/gs1'
          className='h-64 bg-orange-100'
        />
        <GridOption
          title='Shop Beauty'
          image='https://links.papareact.com/4y0'
          className='h-64 bg-blue-100'
        />
        <GridOption
          title='Shop Sports'
          image='https://links.papareact.com/sq2'
          className='h-64 bg-blue-100'
        />
        <GridOption
          title='Enjoy Free Shipping'
          image='https://links.papareact.com/9fh'
          className='h-64 bg-rose-100'
        />
        <GridOption
          title='Flash Deals'
          image='https://links.papareact.com/qx7'
          className='col-span-2 h-64 bg-orange-200'
        />
      </div>
    </main>
  );
}
