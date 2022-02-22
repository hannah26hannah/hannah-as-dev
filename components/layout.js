import Link from 'next/link';
import Navigation from './navigation';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-4 py-2 bg-gradient-to-r from-[#4f6d7a] to-[#eaeaea]'>
      <Navigation />
      <main className='w-full my-6 flex-grow flex-col justify-center items-center py-20 bg-white'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
