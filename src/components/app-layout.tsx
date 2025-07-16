"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useWallet } from '@/context/WalletProvider';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarSeparator
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Home, Bell, Award, User, Settings, LogOut, Zap } from 'lucide-react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { disconnectWallet, walletAddress } = useWallet();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    disconnectWallet();
    router.push('/login');
  };

  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/bounty', label: 'Bounty', icon: Award },
    { href: '/notifications', label: 'Notifications', icon: Bell },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];
  
  const pageTitles: { [key: string]: string } = {
    '/': 'Home Feed',
    '/bounty': 'Bounty Board',
    '/notifications': 'Notifications',
    '/profile': 'My Profile',
    '/settings': 'Settings',
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 p-2">
              <Button variant="ghost" size="icon" className="text-primary rounded-lg" asChild>
                  <Link href="/">
                      <Zap />
                  </Link>
              </Button>
              <h1 className="text-xl font-semibold font-headline">ChainLink</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton isActive={pathname === item.href} className="justify-start">
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarSeparator />
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`https://placehold.co/40x40.png`} data-ai-hint="avatar" />
                  <AvatarFallback>{walletAddress?.substring(2, 4).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-sm truncate">
                  <span className="font-semibold truncate">{walletAddress}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout} aria-label="Log out">
                <LogOut />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
            <SidebarTrigger className="md:hidden" />
            <h2 className="text-xl font-semibold">{pageTitles[pathname] || 'ChainLink'}</h2>
          </header>
          <main className="flex-1 p-4 md:p-6 bg-secondary/50">
              {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
