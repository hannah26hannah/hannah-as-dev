import Head from 'next/head';
import { useRouter } from 'next/router';

import Navigation from './Navigation';
import Footer from './Footer';
import { capitalize } from '../utils';

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  const title = router.pathname.substring(1);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center pb-10 px-5'>
      <Head>
        <title>{capitalize(title)} | Hannah as Dev</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navigation />

      <main className='w-full max-w-screen-tablet mb-6 flex-grow flex-col justify-center items-center pb-5'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const IndexLayout: React.FC = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center pb-10 px-5 tablet:py-[100px] tablet:px-[80px] desktop:py-[200px]'>
      <Head>
        <title>Hannah as Dev</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-full my-6 flex-grow flex-col justify-center items-center py-20'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
