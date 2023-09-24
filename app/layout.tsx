import SideBar from '@/app/components/SideBar';
import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Star Wars',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen flex flex-col'>
        <header className='p-5'>
          Star Wars
        </header>
        <div className='flex'>
          <aside>
            <SideBar />
          </aside>
          <main>{children}</main>
        </div>
        <footer className='p-5 mt-auto w-full'>
          Star Wars Footer
        </footer>
      </body>
    </html>
  )
}
