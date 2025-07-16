"use client";

import AuthGuard from '@/components/auth-guard';
import AppLayout from '@/components/app-layout';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Upload } from 'lucide-react';

const SettingsPage = () => (
    <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold font-headline mb-6">Settings</h1>
        <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="wallet">Wallet</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile</CardTitle>
                        <CardDescription>Make changes to your public profile.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="https://placehold.co/80x80.png" data-ai-hint="developer avatar" />
                                <AvatarFallback>AD</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <Label>Profile Picture</Label>
                                <Input type="file" className="max-w-xs" />
                                <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB.</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                           <Label>Profile Banner</Label>
                           <div className="aspect-[3/1] w-full rounded-lg border-2 border-dashed border-muted flex items-center justify-center">
                               <div className="text-center text-muted-foreground">
                                    <Upload className="mx-auto h-8 w-8" />
                                    <p>Click to upload or drag and drop</p>
                                    <p className="text-xs">PNG, JPG, GIF up to 10MB</p>
                               </div>
                           </div>
                           <Input type="file" className="sr-only" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="name">Display Name</Label>
                            <Input id="name" defaultValue="Anonymous Dev" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea id="bio" defaultValue="Solidity developer and DeFi enthusiast." />
                        </div>
                         <div className="space-y-1">
                            <Label htmlFor="website">Website</Label>
                            <Input id="website" defaultValue="https://dev-portfolio.xyz" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save Changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="notifications">
                 <Card>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Manage how you receive notifications.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between space-x-2">
                           <Label htmlFor="replies" className="flex flex-col space-y-1">
                                <span>Replies</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    Notify me when someone replies to my posts.
                                </span>
                           </Label>
                           <Switch id="replies" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                           <Label htmlFor="likes" className="flex flex-col space-y-1">
                                <span>Likes</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    Notify me when someone likes my posts.
                                </span>
                           </Label>
                           <Switch id="likes" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                           <Label htmlFor="follows" className="flex flex-col space-y-1">
                                <span>New Followers</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    Notify me when someone starts following me.
                                </span>
                           </Label>
                           <Switch id="follows" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save Preferences</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="wallet">
                <Card>
                    <CardHeader>
                        <CardTitle>Wallet</CardTitle>
                        <CardDescription>Manage your connected wallet and network settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-1">
                            <Label>Connected Wallet</Label>
                            <Input readOnly value="0x...1234" />
                        </div>
                         <div className="space-y-1">
                            <Label>Network</Label>
                            <Input readOnly value="Base Sepolia Testnet" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="destructive">Disconnect Wallet</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
);

export default function Settings() {
  return (
    <AuthGuard>
      <AppLayout>
        <SettingsPage />
      </AppLayout>
    </AuthGuard>
  );
}
