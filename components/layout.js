import Link from 'next/link';
import Navigation from './navigation';
import Footer from './footer';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center pb-10 px-5'>
      <Navigation />
      <main className='w-full max-w-screen-tablet mb-6 flex-grow flex-col justify-center items-center pb-5'>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function IndexLayout({ children }) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-10 px-5 tablet:py-[100px] tablet:px-[80px] desktop:py-[200px]'>
      <main className='w-full my-6 flex-grow flex-col justify-center items-center py-20'>
        {children}
      </main>
    </div>
  );
}
