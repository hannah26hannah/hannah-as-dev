import axios from 'axios';

import Head from 'next/head';
import Layout from '../components/layout';
import career from 'data/career';
import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { formatDate } from '../utils';

const ResumeItem = ({ title, children }) => {
  return (
    <article className='w-full'>
      <h3 className='border-y-2 border-gray-5 mb-2 text-lg'>{title}</h3>
      <ul className='flex flex-col gap-2'>{children}</ul>
    </article>
  );
};
export default function Resume() {
  const [data, setData] = useState(null);

  const { profile, coreCompetency, careerSummary, education, certificate } =
    career;

  // useEffect(() => {
  //   const getResumeData = async () => {
  //     const res = await fetch('/api/notionAPI');
  //     const resJson = await res.json();
  //     setData(resJson);
  //   };

  //   getResumeData().catch((err) => console.log('err', err));
  // }, []);

  return (
    <Layout>
      <section className='flex flex-col justify-center items-center gap-3'>
        <ResumeItem title={'🙇🏻‍♀️ About'}>
          <li>{profile.hello}</li>
          <li>{profile.about}</li>
          <l>Career : {profile.job}</l>
          <l>Location : {profile.location}</l>
        </ResumeItem>

        <ResumeItem title={'🧠 Core Competency'}>
          {coreCompetency.map(({ title, items }) => (
            <li key={title}>
              <h4>{title}</h4>
              <p>{items}</p>
            </li>
          ))}
        </ResumeItem>

        <ResumeItem title={'👩🏻‍💻 Career Summary'}>
          {careerSummary.map(
            ({ company, title, description, usedSkills, period }) => (
              <li key={company}>
                <h4>{`${company} (${period})`}</h4>
                <h5>{title}</h5>
                <h6>{description}</h6>
                <p>Used Skills: {usedSkills}</p>
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
