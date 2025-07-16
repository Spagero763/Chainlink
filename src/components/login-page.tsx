"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from "@/context/WalletProvider";
import { Button } from "@/components/ui/button";
import { Code, Link as LinkIcon, Zap } from 'lucide-react';

export default function LoginPage() {
  const { connectWallet, isConnected, isLoading } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isConnected) {
      router.push('/');
    }
  }, [isConnected, isLoading, router]);

  const handleConnect = () => {
    connectWallet();
  };
  
  if (isLoading || isConnected) {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-background">
            <div className="flex flex-col items-center space-y-2">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="text-muted-foreground">Connecting to your wallet...</p>
            </div>
        </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background via-secondary to-background p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
            <div className="inline-block p-4 bg-primary/10 rounded-xl">
                <Zap className="h-12 w-12 text-primary" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground font-headline">
                Welcome to ChainLink
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
                The decentralized social platform for blockchain developers.
            </p>
        </div>
        <div className="space-y-6 rounded-xl bg-card p-8 shadow-2xl border">
            <h2 className="text-2xl font-semibold">Connect Your Wallet</h2>
            <p className="text-muted-foreground">
                Connect your Base Sepolia testnet wallet to join the conversation and start building.
            </p>
            <Button onClick={handleConnect} className="w-full" size="lg">
                Connect Wallet
            </Button>
        </div>
        <div className="flex justify-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
                <Code size={20} />
                <span>Share Code</span>
            </div>
            <div className="flex items-center space-x-2">
                <LinkIcon size={20} />
                <span>Solve Bounties</span>
            </div>
            <div className="flex items-center space-x-2">
                <Zap size={20} />
                <span>Innovate Together</span>
            </div>
        </div>
      </div>
    </div>
  );
}
