import Layout from '../../components/Layout';
import Femqorg from '../../public/images/research-logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Research() {
  return (
    <Layout>
      <section className='flex flex-col justify-center items-center'>
        <article className='border-[1px] border-gray-light rounded-lg p-3'>
          <h2 className='font-bold'>Femqorg Index</h2>
          <span className='block text-right text-gray-default'>
            2021. 08 ~ 2021. 11
          </span>

          <div className='w-full my-4 flex justify-center items-center border-2 border-gray-default'>
            <Image src={Femqorg} alt='femqorg logo' className='rounded-lg' />
          </div>

          <p className='my-4'>여성형, 퀴어 인공 존재 아카이브 리서치 및 제작</p>
          <p className='my-4'>Mitorix - Femqorg Index - nth meeting 211128</p>

          <Link href={'http://www.virtualstation2021.com/'}>
            <a
              className='cursor-pointer hover:text-purple-default'
              target='_blank'
            >
              <span className='mr-2'>가상 정거장 Virtual Station</span>
              {/* <FontAwesomeIcon icon={faBrowser} size='xl' /> */}
              <FontAwesomeIcon icon={faAngleRight} size='xl' />
            </a>
          </Link>
        </article>
      </section>
    </Layout>
  );
}
