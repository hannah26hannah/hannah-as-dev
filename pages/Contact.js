import Head from 'next/head';
import Layout from '../components/layout';
import metadata from 'data/metadata';

export default function Contact() {
  return (
    <Layout>
      <section className='flex flex-col justify-center items-center'>
        <h1>Check out my channels</h1>
        <ul className='flex flex-row mt-5'>
          {metadata.social.map(({ name, link }) => (
            <li key={name} className='p-2 hover:bg-beige-default rounded-md'>
              <a href={link} target='_blank'>
                <img alt={name} src={`/images/${name}.svg`} width='46.22px' />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <hr className='my-4 mx-auto w-1/2' />

      <section className='you-can-book-me mt-5'>
        <h2 className='text-center'>
          Let's have coffee and a great chat with me!
          <br />
          You can book me 👇
        </h2>
        <div className='flex justify-center mt-5'>
          <a
            href='https://dev-hannah.youcanbook.me/'
            data-ycbm-modal='true'
            target='_blank'
          >
            <img
              src='https://youcanbook.me/resources/pics/ycbm-button.png'
              className='border-none'
              // style='border-style:none;'
            />
          </a>
        </div>
      </section>
    </Layout>
  );
}
