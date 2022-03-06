import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

const Highlighter = ({ text, path }) => {
  return (
    <Link href={path}>
      <a className='hover:underline hover:cursor-pointer hover:text-white'>
        {text}
      </a>
    </Link>
  );
};
export default function Home() {
  return (
    <Layout className='bg-gray-default w-full h-full'>
      <Head>
        <title>Hannah as Dev</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-row justify-between'>
        <article>
          <p>
            Hi, <br />
            I'm a <Highlighter text='Seoul based' path='/contact' />
            <br />
            <Highlighter text='Front-end Developer' path='/projects/dev' />
            <br />
            who likes to{' '}
            <Highlighter text='learn + write about new things' path='/blog' />
            <br />
            I ... <br />
            run a{' '}
            <Highlighter
              text='queer-tech community, :q'
              path='/projects/organizer'
            />
            <br />
            love to{' '}
            <Highlighter text='dive into further' path='/projects/researcher' />
          </p>
        </article>
        <aside className='flex items-end'>
          <h1>Hannah as Dev</h1>
        </aside>
      </main>
    </Layout>
  );
}
