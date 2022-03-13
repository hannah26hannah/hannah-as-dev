import Head from 'next/head';
import Layout from '../components/layout';

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>hannah as dev | Resume</title>
      </Head>
      <section className='flex flex-col justify-center items-center'>
        <h1>Resume</h1>
      </section>
    </Layout>
  );
}
