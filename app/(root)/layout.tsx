import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  if (userId) {
    redirect('/dashboard');
  }


  return (
    <>
      {children}
    </>
  );
};
