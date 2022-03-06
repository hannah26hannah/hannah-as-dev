import Link from 'next/link';
import Layout from '../components/layout';
import Head from 'next/head';

import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

function PostSub(post) {
  return (
    <div className='mb-6'>
      <div className='flex flex-row justify-between'>
        <Title url={post.url} title={post.title} />

        <TimeStamp post={post} />
      </div>
      <Description text='kfjlskflsfklfsfsfdsfsdfsflskf;lsfsf' />
      <div className='flex justify-end'>
        <TagSlice />
      </div>
    </div>
  );
}

function TimeStamp({ post }) {
  return (
    <time dateTime={post.date} className='block text-sm text-gray-600'>
      {format(parseISO(post.date), 'LLLL d, yyyy')}
    </time>
  );
}

function Title({ url, title }) {
  return (
    <h2 className='text-2xl text-white py-3'>
      <Link href={url}>
        <a className='text-blue-700 hover:text-blue-900'>{title}</a>
      </Link>
    </h2>
  );
}

function Description({ text }) {
  return <p className='text-white'>{text}</p>;
}

function TagSlice() {
  return (
    <ul className='flex flex-row'>
      {[
        ['tag1', '/result'],
        ['tag2', '/result'],
      ].map(([tag, path]) => (
        <li key={path}>
          <Link href={path}>
            <a>{tag}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
function PostMain(post) {
  return (
    <article className='flex flex-row'>
      <img
        src={'https://via.placeholder.com/250'}
        alt='blog alt'
        className='rounded-lg'
      />
      <div className='flex flex-col p-2'>
        <Title url={post.url} title={post.title} />
        <Description text={'descriptoins...'} />
        <TimeStamp post={post} />
        <TagSlice />
      </div>
    </article>
  );
}

function LayoutPosts({ children }) {
  return <div className='flex flex-col'>{children}</div>;
}

function PostMenu() {
  return (
    <aside className='w-40 absolute left-4'>
      <ul className='bg-gray-light rounded-lg p-2'>
        {[
          ['database', 2],
          ['git', 10],
          ['graphic', 2],
          ['CSS', 10],
        ].map(([tag, num]) => (
          <li key={tag}>
            {tag} ({num})
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>hannah as dev | Blog</title>
      </Head>
      <section className='w-full flex flex-row justify-center'>
        <PostMenu />
        <LayoutPosts>
          <div className='mb-16 text-center flex flex-row gap-14'>
            {posts
              .filter((post, index) => index < 2)
              .map((item, index) => (
                <PostMain key={index} {...item} />
              ))}
          </div>
          <div className='flex flex-col'>
            {posts
              .filter((post, index) => index >= 2)
              .map((item, index) => (
                <PostSub key={index} {...item} />
              ))}
          </div>
        </LayoutPosts>
      </section>
    </Layout>
  );
}
