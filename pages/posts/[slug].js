import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import Layout from '../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import GiscusComment from '../../components/GiscusComment';
import Tags from '../../components/Tag';
import Excerpt from '../../components/Excerpt';

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

function PostLayout({ post }) {
  const CustomIcon = forwardRef(({ onClick, href }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className='absolute left-0 ml-2 hover:cursor-pointer'
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </a>
    );
  });


  return (
    <Layout>
      <Head>
        <title>{post.title} | hannah as dev</title>
      </Head>
      <article className='flex flex-col justify-center items-center w-full'>
        <h2 className='bg-beige-default w-full flex justify-center items-center text-center text-2xl text-gray-1 py-3 border-t-2 border-b-2 border-gray-1 relative tracking-wider'>
          <Link href='/blog'>
            <CustomIcon />
          </Link>
          {post.title}
        </h2>
        <time
          dateTime={post.date}
          className='w-full text-sm text-gray-600 text-right my-1'
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        {post.subtitle ? (
          <h3 className='italic text-gray-default text-base my-2'>
            {post.subtitle}
          </h3>
        ) : (
          ''
        )}

        <div
          dangerouslySetInnerHTML={{ __html: post.body.html }}
          className='py-3 flex flex-col gap-8'
          align='center'
        />

      </article>
      
        
      <Excerpt excerpt={post.excerpt} />
      <Tags tags={post.tags} />
      {/* <section><GiscusComment slug={post.slug} /></section> */}
    </Layout>
  );
}

export default PostLayout;
