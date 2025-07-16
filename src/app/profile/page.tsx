import AuthGuard from '@/components/auth-guard';
import AppLayout from '@/components/app-layout';
import { useWallet } from '@/context/WalletProvider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Link as LinkIcon, Calendar, Edit } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image';

const ProfilePage = () => {
  const { walletAddress } = useWallet();

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="overflow-hidden">
        <div className="relative h-48 w-full bg-secondary">
          <Image
            src="https://placehold.co/1200x400.png"
            alt="Profile banner"
            layout="fill"
            objectFit="cover"
            data-ai-hint="abstract background"
          />
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex items-end -mt-20">
            <Avatar className="h-28 w-28 border-4 border-background">
              <AvatarImage src="https://placehold.co/112x112.png" data-ai-hint="developer avatar" />
              <AvatarFallback>{walletAddress?.substring(2, 4).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="ml-auto">
                <Button variant="outline"><Edit className="mr-2 h-4 w-4" /> Edit Profile</Button>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Anonymous Dev</h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>{walletAddress}</span>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="mt-2 text-sm text-foreground/80 max-w-prose">
            Solidity developer and DeFi enthusiast. Building the future of finance, one smart contract at a time.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                <a href="#" className="hover:underline">dev-portfolio.xyz</a>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Joined August 2023</span>
              </div>
          </div>
           <div className="mt-4 flex gap-6">
               <div><span className="font-bold">123</span> <span className="text-muted-foreground">Following</span></div>
               <div><span className="font-bold">456</span> <span className="text-muted-foreground">Followers</span></div>
           </div>
        </div>
      </Card>
      
      <Tabs defaultValue="posts" className="mt-6">
        <TabsList>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="replies">Replies</TabsTrigger>
            <TabsTrigger value="bounties">Bounties</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
            <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                    No posts yet.
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="replies">
            <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                    No replies yet.
                </CardContent>
            </Card>
        </TabsContent>
         <TabsContent value="bounties">
            <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                    No bounties contributed to yet.
                </CardContent>
            </Card>
        </TabsContent>
         <TabsContent value="likes">
            <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                    No liked posts yet.
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default function Profile() {
  return (
    <AuthGuard>
      <AppLayout>
        <ProfilePage />
      </AppLayout>
    </AuthGuard>
  );
}
