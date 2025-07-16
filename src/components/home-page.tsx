"use client"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Repeat, Share } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useWallet } from '@/context/WalletProvider';

const posts = [
    {
        id: 1,
        author: 'Satoshi N.',
        handle: '@satoshi',
        avatar: 'https://placehold.co/40x40.png',
        avatarHint: 'inventor avatar',
        content: "Just released a paper on a peer-to-peer electronic cash system. I call it Bitcoin. Hope it can solve some of the problems with centralized finance. What are your thoughts? #blockchain #crypto",
        likes: 2008,
        comments: 21,
        reposts: 99,
        time: '15y',
    },
    {
        id: 2,
        author: 'Vitalik B.',
        handle: '@vitalik',
        avatar: 'https://placehold.co/40x40.png',
        avatarHint: 'developer avatar',
        content: 'Working on a new concept: a decentralized platform that runs smart contracts. Applications as we know them, but unstoppable. I call it Ethereum. Looking for collaborators! #ethereum #web3 #smartcontracts',
        likes: 2013,
        comments: 777,
        reposts: 500,
        time: '10y',
    },
    {
        id: 3,
        author: 'DevDAO',
        handle: '@devdao',
        avatar: 'https://placehold.co/40x40.png',
        avatarHint: 'organization logo',
        content: 'Hackathon Alert! We are hosting a 3-day virtual hackathon focused on DeFi innovations on Base. Prize pool of $50k. Are you in? #hackathon #defi #base',
        likes: 1200,
        comments: 150,
        reposts: 300,
        time: '2d',
    }
];

const PostCard = ({ post }: { post: typeof posts[0] }) => (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-start gap-4 p-4">
            <Avatar>
                <AvatarImage src={post.avatar} data-ai-hint={post.avatarHint} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <span className="font-bold">{post.author}</span>
                    <span className="text-sm text-muted-foreground">{post.handle}</span>
                    <span className="text-sm text-muted-foreground">· {post.time}</span>
                </div>
                <p className="mt-1 text-sm whitespace-pre-wrap">{post.content}</p>
            </div>
        </CardHeader>
        <CardFooter className="flex justify-around p-1 border-t bg-muted/50">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <MessageCircle size={16} /> {post.comments}
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Repeat size={16} /> {post.reposts}
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Heart size={16} /> {post.likes}
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Share size={16} />
            </Button>
        </CardFooter>
    </Card>
)

export default function HomePage() {
  const { walletAddress } = useWallet();
  return (
    <div className="max-w-2xl mx-auto">
        <div className="space-y-4">
            <Card>
                <CardContent className="p-4">
                    <div className="flex gap-4">
                        <Avatar>
                            <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="developer avatar"/>
                            <AvatarFallback>{walletAddress?.substring(2, 4).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="w-full">
                            <Textarea placeholder="What's on your mind, dev?" className="mb-2 bg-secondary border-none focus-visible:ring-primary" />
                            <div className="flex justify-end">
                                <Button>Post</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <div className="flex flex-col gap-4">
              {posts.map(post => (
                  <PostCard key={post.id} post={post} />
              ))}
            </div>
        </div>
    </div>
  );
}
