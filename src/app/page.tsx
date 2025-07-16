import AuthGuard from '@/components/auth-guard';
import AppLayout from '@/components/app-layout';
import HomePage from '@/components/home-page';

export default function Home() {
  return (
    <AuthGuard>
      <AppLayout>
        <HomePage />
      </AppLayout>
    </AuthGuard>
  );
}
