import AuthGuard from '@/components/auth-guard';
import AppLayout from '@/components/app-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, UserPlus, MessageSquare, Heart } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'follow',
    user: { name: 'Vitalik B.', avatar: 'https://placehold.co/40x40.png', avatarHint: 'developer avatar' },
    time: '2h ago',
  },
  {
    id: 2,
    type: 'reply',
    user: { name: 'Gavin W.', avatar: 'https://placehold.co/40x40.png', avatarHint: 'engineer avatar' },
    post: 'your post about sharding',
    time: '5h ago',
  },
  {
    id: 3,
    type: 'like',
    user: { name: 'DevDAO', avatar: 'https://placehold.co/40x40.png', avatarHint: 'organization logo' },
    post: 'your application for the DeFi hackathon bounty',
    time: '1d ago',
  },
  {
    id: 4,
    type: 'follow',
    user: { name: 'zkStark', avatar: 'https://placehold.co/40x40.png', avatarHint: 'researcher avatar' },
    time: '2d ago',
  },
];

const NotificationIcon = ({ type }: { type: string }) => {
    switch(type) {
        case 'follow': return <UserPlus className="h-5 w-5 text-blue-500" />;
        case 'reply': return <MessageSquare className="h-5 w-5 text-green-500" />;
        case 'like': return <Heart className="h-5 w-5 text-red-500" />;
        default: return <Bell className="h-5 w-5 text-gray-500" />;
    }
}

const NotificationItem = ({ notification }: { notification: typeof notifications[0] }) => (
    <li className="p-4 hover:bg-muted/50 transition-colors flex items-start gap-4">
        <NotificationIcon type={notification.type} />
        <div className="flex-grow">
            <Avatar className="h-8 w-8 inline-block mr-2">
                <AvatarImage src={notification.user.avatar} data-ai-hint={notification.user.avatarHint} />
                <AvatarFallback>{notification.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="inline">
                <span className="font-bold">{notification.user.name}</span>
                {notification.type === 'follow' && ' started following you.'}
                {notification.type === 'reply' && ` replied to ${notification.post}.`}
                {notification.type === 'like' && ` liked ${notification.post}.`}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{notification.time}</p>
        </div>
    </li>
);

const NotificationsPage = () => (
  <div className="max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold font-headline mb-6">Notifications</h1>
    <Card>
        <CardContent className="p-0">
            <ul className="divide-y divide-border">
                {notifications.map(n => <NotificationItem key={n.id} notification={n} />)}
                <li className="p-4 text-center text-muted-foreground">
                    No more notifications.
                </li>
            </ul>
        </CardContent>
    </Card>
  </div>
);

export default function Notifications() {
  return (
    <AuthGuard>
      <AppLayout>
        <NotificationsPage />
      </AppLayout>
    </AuthGuard>
  );
}
