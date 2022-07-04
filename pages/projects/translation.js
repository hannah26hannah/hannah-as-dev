import Card from 'components/Card';
import Layout from 'components/Layout';

import FreeCodeCamp from 'images/translation-logo.png';

export default function Translation() {
  return (
    <Layout>
      <section className='flex flex-col justify-center items-center'>
        <Card
          title='FreeCodeCamp'
          period={{ start: '2022 Summer', end: 'present' }}
          image={{ src: FreeCodeCamp, alt: 'FreeCodeCamp 로고' }}
          description='FreeCodeCamp article 한국어 번역'
        ></Card>
      </section>
    </Layout>
  );
}
