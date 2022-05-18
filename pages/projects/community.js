import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import ColonQ from '../../public/images/community-logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Community() {
  return (
    <Layout>
      <section className='flex flex-col justify-center items-center'>
        <article className='border-[1px] border-gray-light rounded-lg p-3'>
          <h2 className='font-bold'>Colon Q</h2>
          <span className='block text-right text-gray-default'>2022 ~ </span>

          <div className='w-[200px] my-4'>
            <Image src={ColonQ} alt='colon q logo' className='rounded-lg' />
          </div>

          <p className='my-4'>모두를 위한 퀴어 테크 커뮤니티</p>
          <Link href={'https://twitter.com/colonqqueertech?s=21'}>
            <a
              className='cursor-pointer hover:text-purple-default'
              target='_blank'
            >
              <span className='mr-2'>Colon Q Twitter</span>
              <FontAwesomeIcon icon={faTwitter} size='xl' />
            </a>
          </Link>
        </article>
      </section>
    </Layout>
  );
}
