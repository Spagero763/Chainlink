"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@/context/WalletProvider';
import { Skeleton } from './ui/skeleton';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isConnected, isLoading } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isConnected) {
      router.replace('/login');
    }
  }, [isConnected, isLoading, router]);

  if (isLoading || !isConnected) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-background">
          <div className="w-full max-w-7xl p-4">
            <div className="flex gap-6">
              <Skeleton className="hidden md:block h-[90vh] w-64 rounded-lg" />
              <div className="flex-1 space-y-6">
                <Skeleton className="h-40 w-full rounded-lg" />
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-48 w-full rounded-lg" />
              </div>
            </div>
          </div>
      </div>
    );
  }

  return <>{children}</>;
}
