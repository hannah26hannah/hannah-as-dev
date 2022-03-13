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

function Post(post) {
  return (
    <article className='flex flex-col justify-center items-center w-full'>
      <h2 className='w-full text-center text-2xl text-gray-1 py-3 border-t-2 border-b-2 border-gray-1'>
        {post.title}
      </h2>
      <time
        dateTime={post.date}
        className='w-full text-sm text-gray-600 text-right my-1'
      >
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div
        dangerouslySetInnerHTML={{ __html: post.body.html }}
        className='py-3'
      />
    </article>
  );
}
export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>hannah as dev | Blog</title>
      </Head>
      <section>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </section>
    </Layout>
  );
}
