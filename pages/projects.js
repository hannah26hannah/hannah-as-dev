import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Projects() {
  const projects = [
    ['side-projects', '/side-projects', '/projects/side-projects'],
    ['translation', '/translation', '/projects/translation'],
    ['research', '/research', '/projects/research'],
    ['community', '/community', '/projects/community'],
  ];

  return (
    <Layout>
      <ul className='w-full h-full flex flex-col justify-center items-center'>
        {projects.map(([title, url, as]) => (
          <li
            key={url}
            className='w-full text-center text-xl text-gray-1 py-2 border-b-2 border-gray-5 first:border-t-2'
          >
            <Link href={url} as={as}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
