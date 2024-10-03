import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className='mx-auto flex w-full flex-col items-center justify-center space-x-4 space-y-4 p-10 lg:flex-row lg:items-start  lg:space-y-8'>
      <div className='flex space-x-4'>
        <div className='hidden space-y-4 lg:inline'>
          <Skeleton className='size-[100px] rounded-md' />
          <Skeleton className='size-[100px] rounded-md' />
          <Skeleton className='size-[100px] rounded-md' />
        </div>
        <Skeleton className='inline size-[200px] rounded-md lg:hidden' />
        <Skeleton className='hidden rounded-md lg:inline lg:h-[300px] lg:w-[400px]' />
      </div>
      <div className='h-[500px] w-[400px] animate-pulse space-y-2 rounded-md border p-2 sm:h-[780px] sm:w-[520px]'>
        <Skeleton className='h-[40px] w-[380px] rounded-md sm:w-[500px]' />
        <Skeleton className='h-[40px] w-[380px] rounded-md sm:w-[300px]' />
        <Skeleton className='h-[385px] w-[380px] rounded-md sm:h-[650px] sm:w-[500px]' />
      </div>
    </div>
  );
};

export default Loading;
