import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className='p-10'>
      <h1 className='mb-2 text-3xl font-bold'>Scraping Results</h1>
      <h2 className='mb-5 text-gray-400'>We wont be long</h2>
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <Skeleton className='h-[400px] w-[300px]' />
        <Skeleton className='h-[400px] w-[300px]' />
        <Skeleton className='h-[400px] w-[300px]' />
        <Skeleton className='h-[400px] w-[300px]' />
        <Skeleton className='h-[400px] w-[300px]' />
        <Skeleton className='h-[400px] w-[300px]' />
        <Skeleton className='h-[400px] w-[300px]' />
        <Skeleton className='h-[400px] w-[300px]' />
      </div>
    </div>
  );
};

export default Loading;
