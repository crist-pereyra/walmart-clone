'use client';
import { Basket } from '@/components/Basket';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import React from 'react';

const BasketIntercept = () => {
  const router = useRouter();
  const onDismiss = () => {
    router.back();
  };
  return (
    <Dialog open onOpenChange={(isOpen) => !isOpen && onDismiss()}>
      <DialogContent className='w-full max-w-3xl overflow-scroll'>
        <DialogHeader>
          <DialogTitle>Basket</DialogTitle>
          <DialogDescription>
            <p>Content of your basket</p>
          </DialogDescription>
        </DialogHeader>
        <Basket />
      </DialogContent>
    </Dialog>
  );
};

export default BasketIntercept;
