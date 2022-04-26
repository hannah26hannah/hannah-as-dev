import Link from 'next/link';
import Layout from '../components/layout';
import Head from 'next/head';

import { allPosts } from 'contentlayer/generated';
import {
  compareDesc,
  format,
  formatDistance,
  parseISO,
  subDays,
} from 'date-fns';

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

function PostList(post) {
  return (
    <li className='w-full text-center text-xl text-gray-1 py-2 border-b-2 border-gray-5 first:border-t-2'>
      <Link href={post.url}>
        <a>
          <span className='mr-2'>{post.title}</span>
          <time
            dateTime={post.date}
            className='w-full text-sm text-gray-600 my-1'
          >
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </a>
      </Link>
    </li>
  );
}

export default function Blog({ posts }) {
  return (
    <Layout>
      <section className='flex flex-row justify-center gap-5'>
        {/* TODO bottom-to-top animation use cubic-bezier animation ref: https://wsss.tistory.com/788 */}

        <ul>
          {posts.map((post, index) => (
            <PostList key={index} {...post} />
          ))}
        </ul>
      </section>
    </Layout>
  );
}
