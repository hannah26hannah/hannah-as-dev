import Link from 'next/link';
import Head from 'next/head';
import { IndexLayout } from '../components/Layout';

const Highlighter = ({ text, path }) => {
  return (
    <Link href={path}>
      <a className='underline hover:cursor-pointer'>{text}</a>
    </Link>
  );
};

export default function Home() {
  return (
    <IndexLayout>
      <section className='w-full flex flex-col tablet:flex-row justify-between text-gray-1 '>
        <article>
          <p className='font-normal text-2xl'>
            Hi, <br />
            I'm a <Highlighter text='Seoul based' path='/channel' />
            <br />
            <Highlighter text='Front-end Developer' path='/projects' />
            <br />
            who likes to{' '}
            <Highlighter text='learn + write about new things' path='/blog' />
            <br />
            I ... <br />
            run a{' '}
            <Highlighter text='queer-tech community, :q' path='/projects' />
            <br />
            love to <Highlighter text='dive into further' path='/projects' />
          </p>
        </article>
        <aside className='flex absolute right-5 bottom-10 tablet:items-end'>
          <h1 className='font-bold text-3xl'>Hannah as Dev</h1>
        </aside>
      </section>
    </IndexLayout>
  );
}
