import Head from 'next/head';
import Layout from '../components/layout';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>hannah as dev | Projects</title>
      </Head>
      <section className='flex flex-col justify-center items-center'>
        <h1>Projects</h1>
      </section>
    </Layout>
  );
}
