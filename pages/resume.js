import axios from 'axios';

import Head from 'next/head';
import Layout from '../components/Layout';
import career from 'data/career';
import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { formatDate } from '../utils';
import Tags from '../components/Tag';

const ResumeItem = ({ title, children }) => {
  return (
    <article className='w-full'>
      <h3 className='border-y-2 border-gray-5 mb-2 text-lg font-bold bg-beige-default pl-2'>
        {title}
      </h3>
      <ul className='flex flex-col gap-2'>{children}</ul>
    </article>
  );
};
export default function Resume() {
  const [data, setData] = useState(null);

  const { profile, coreCompetency, careerSummary, education, certificate } =
    career;

  return (
    <Layout>
      <section className='flex flex-col justify-center items-center gap-3'>
        <ResumeItem title={'🙇🏻‍♀️ About'}>
          <li>{profile.hello}</li>
          <li>{profile.about}</li>
          <li className='mt-5 font-bold'>
            Career : <span className='text-purple-default'>{profile.job}</span>
          </li>
          <li>
            <span className='font-bold'>Location : </span>
            {profile.location}
          </li>
        </ResumeItem>

        <ResumeItem title={'🧠 Core Competency'}>
          {coreCompetency.map(({ title, items }) => (
            <li key={title}>
              <h4 className='font-bold my-2 text-purple-default'>{title}</h4>

              <ul className='list-disc pl-5'>
                {items.map((item, index) => (
                  <li key={index} className=''>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ResumeItem>

        <ResumeItem title={'👩🏻‍💻 Career Summary'}>
          {careerSummary.map(
            ({ company, title, description, usedSkills, period }) => (
              <li key={company}>
                <h4 className='font-bold my-2 flex flex-row justify-between'>
                  <span className='text-purple-default'>{`${company} (${period})`}</span>
                  <span className='text-gray-default text-sm'>{title}</span>
                </h4>

                <h6>{description}</h6>
                <p className='mt-2'>
                  <span className='font-bold text-sm'>Used Skills : </span>
                  {usedSkills}
                </p>
              </li>
            )
          )}
        </ResumeItem>

        <ResumeItem title={'👩🏻‍🎓 Education'}>
          {education.map(({ title, period }) => (
            <li key={title}>
              <h4>{`${title} (${period})`}</h4>
            </li>
          ))}
        </ResumeItem>

        <ResumeItem title={'📃 Certificate'}>
          {certificate.map(({ title, date }) => (
            <li key={title}>
              <h4>{`${title} (${date})`}</h4>
            </li>
          ))}
        </ResumeItem>
      </section>
    </Layout>
  );
}
