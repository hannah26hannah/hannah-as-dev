import axios from 'axios';

import Head from 'next/head';
import Layout from '../components/layout';

import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { formatDate } from '../utils';

export default function Resume() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getResumeData = async () => {
      const res = await fetch('/api/notionAPI');
      const resJson = await res.json();
      setData(resJson);
    };

    getResumeData().catch((err) => console.log('err', err));
  }, []);

  return (
    <Layout>
      <section className='flex flex-col justify-center items-center'>
        {data && (
          <article>
            <h2 className='flex justify-end items-center'>
              {data.title}
              <img src={data.icon} alt='icon' width='40px' height='40px' />
            </h2>

            <img src={data.cover} alt='cover' />

            <time
              dateTime={data.lastEditedTime}
              className='w-full text-sm my-1 text-right text-gray-600'
            >
              {`Last Updated, ${formatDate(data.lastEditedTime)}`}
            </time>
          </article>
        )}
      </section>
    </Layout>
  );
}
