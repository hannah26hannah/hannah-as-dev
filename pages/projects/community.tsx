import Link from 'next/link';

import Layout from 'components/Layout';
import Card from 'components/Card';

import ColonQ from 'images/community-logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function Community() {
  return (
    <Layout>
      <section className='flex flex-col justify-center items-center'>
        <Card
          title='Colon Q'
          period={{ start: '2022', end: 'present' }}
          image={{ src: ColonQ, alt: 'colon q logo' }}
          description='모두를 위한 퀴어 테크 커뮤니티'
        >
          <Link href={'https://twitter.com/colonqqueertech?s=21'}>
            <a
              className='cursor-pointer hover:text-purple-default'
              target='_blank'
            >
              <span className='mr-2'>Colon Q Twitter</span>
              <FontAwesomeIcon icon={faTwitter as IconProp} size='lg' />
            </a>
          </Link>
        </Card>
      </section>
    </Layout>
  );
}
