import MobileNavProvider from '@/contexts/mobileNavCtx';
import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';

const publicSans = Public_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Easybank landing page',
  description:
    'This is a solution to the Easybank landing page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.'
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body className={`${publicSans.className} overflow-x-hidden`}>
      <MobileNavProvider>{children}</MobileNavProvider>
    </body>
  </html>
);

export default RootLayout;
