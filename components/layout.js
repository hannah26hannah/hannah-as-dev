import Link from 'next/link';
import Navigation from './navigation';
import Footer from './footer';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    // bg-gradient-to-r from-[#4f6d7a] to-[#eaeaea]
    <div className='flex min-h-screen flex-col items-center justify-center px-4 py-2 bg-gray-default'>
      {router.pathname !== '/' && <Navigation />}
      <main className='w-full my-6 flex-grow flex-col justify-center items-center py-20'>
        {children}
      </main>

      {router.pathname !== '/' && <Footer />}
    </div>
  );
}
