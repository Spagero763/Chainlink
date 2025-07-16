import AuthGuard from '@/components/auth-guard';
import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlusCircle } from 'lucide-react';

const bounties = [
    {
      id: 1,
      title: 'Create a Uniswap V2 Subgraph',
      author: 'DeFi Pulse',
      reward: '1.5 ETH',
      description: 'We need a subgraph to track all swaps and liquidity provisions for a specific pair on Uniswap V2.',
      tags: ['subgraph', 'ethereum', 'thegraph'],
    },
    {
      id: 2,
      title: 'Audit Smart Contract for NFT Marketplace',
      author: 'NFTGalaxy',
      reward: '5,000 USDC',
      description: 'Security audit of our new ERC-721 marketplace contract before mainnet deployment. Report all vulnerabilities.',
      tags: ['security', 'audit', 'solidity'],
    },
    {
      id: 3,
      title: 'Build a WalletConnect Integration for our DApp',
      author: 'CoolDApp',
      reward: '2,000 DAI',
      description: 'Integrate WalletConnect v2 to allow users to connect with mobile wallets on our platform.',
      tags: ['walletconnect', 'frontend', 'react'],
    },
    {
      id: 4,
      title: 'Optimize Gas Usage in Staking Contract',
      author: 'YieldFarmz',
      reward: '1,000 aUSDC',
      description: 'Review our staking contract and implement gas optimization techniques to reduce user transaction costs.',
      tags: ['solidity', 'gas-optimization', 'defi'],
    },
    {
      id: 5,
      title: 'Create Documentation for our new API',
      author: 'BlockQuery',
      reward: '500 USDT',
      description: 'Write comprehensive, developer-friendly documentation for our new blockchain data API.',
      tags: ['documentation', 'technical-writing'],
    },
    {
        id: 6,
        title: 'Design a Logo for a new Layer 2',
        author: 'SpeedyNet',
        reward: '300 OP',
        description: 'We are a new optimistic rollup and need a cool logo and brand identity. Looking for creative designers.',
        tags: ['design', 'branding', 'L2'],
    }
];

const BountyPage = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold font-headline">Bounty Board</h1>
      <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Post a Bounty
      </Button>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {bounties.map(bounty => (
            <Card key={bounty.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{bounty.title}</CardTitle>
                        <Badge variant="default" className="bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30">{bounty.reward}</Badge>
                    </div>
                    <CardDescription>by {bounty.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">{bounty.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {bounty.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full">
                        View Bounty <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        ))}
    </div>
  </div>
);

export default function Bounty() {
  return (
    <AuthGuard>
      <AppLayout>
        <BountyPage />
      </AppLayout>
    </AuthGuard>
  );
}
