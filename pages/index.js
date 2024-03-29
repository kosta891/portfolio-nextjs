import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

import { BsArrowRight } from 'react-icons/bs';
import Projects from '../components/Projects';
import Layout from '../components/UI/Layout';

import { social } from '../utils/constants';
import Skills from '../components/Skills';

export default function Home({ projects }) {
  return (
    <Layout>
      <div className='flex flex-col '>
        <div className='flex flex-col-reverse sm:flex-row justify-between '>
          <div className='pr-8'>
            <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-2 '>
              Miloš Kostadinović
            </h1>
            <h2 className='text-gray-700 dark:text-gray-200 mb-4'>
              Web Developer, Programmer
            </h2>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
              Developing and styling Websites and WebApps. Building websites
              from scratch to production ready.
            </p>
            <ul className='flex flex-row justify-start items-center mb-16'>
              {social.map((link) => (
                <li
                  key={link.id}
                  className='flex justify-center items-center mr-4 w-8 h-10 '
                >
                  <a
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className=' text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-500 transition-all text-2xl sm:text-3xl'
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='w-28 sm:w-56'>
            <Image
              src='/images/avatar.jpg'
              alt='Miloš Kostadinović'
              width={250}
              height={250}
              className=' rounded-full object-cover object-center sm:h-80'
              blurDataURL='/images/avatar.jpg'
              placeholder='blur'
            />
          </div>
        </div>

        <Skills />

        <section>
          <h3 className='text-2xl font-semibold'>Featured Projects</h3>
          <Projects data={projects} />

          <div className='mt-8 md:mt-16'>
            <Link href='/projects'>
              <a className='mt-8'>
                See All Projects
                <BsArrowRight className='inline text-2xl ml-1' />
              </a>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: 'projects',
    'fields.featured': true,
  });

  return {
    props: { projects: res.items },
    revalidate: 180,
  };
}
