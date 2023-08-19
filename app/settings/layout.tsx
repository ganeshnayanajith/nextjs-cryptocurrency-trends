import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';
import Navbar from '@/components/navbar';

export default async function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <>
      <Navbar/>
      {children}
    </>
  );
};
