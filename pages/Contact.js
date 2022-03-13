import Head from 'next/head';
import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>hannah as dev | Contact</title>
      </Head>
      <section className='flex flex-col justify-center items-center'>
        <h1>Contact</h1>
      </section>
    </Layout>
  );
}
