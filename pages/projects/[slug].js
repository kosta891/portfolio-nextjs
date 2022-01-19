import Head from 'next/head';
import { useRouter } from 'next/router';
import Project from '../../components/Project';
import Layout from '../../components/UI/Layout';
import { projectsData } from '../../utils/projectsData';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import useSwr from 'swr';
import { API_URL } from '../../utils/urls';
import axios from 'axios';

export default function singleProject({ project }) {
  const { id, name, slug, description, github, live } = project;
  console.log(project);
  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <section>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-12 '>
          {name}
        </h1>
        <p className='mt-2 md:mt-6 mb-6 md:mb-8'>{description}</p>

        <div>
          {/* <Image
            src={imageUrl}
            width={720}
            height={500}
            className='w-full h-full'
            objectFit='cover'
            objectPosition='center'
          /> */}
        </div>
        <div className='mt-6 md:mt-12'>
          {github && (
            <a
              href={github}
              className='mr-4 rounded text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 px-3 md:py-2 py-1 transition-all'
              target='_blank'
            >
              github
            </a>
          )}
          {live && (
            <a
              href={live}
              className='mr-4 rounded text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 px-3 md:py-2 py-1 transition-all'
              target='_blank'
            >
              Site
            </a>
          )}
        </div>
      </section>
    </Layout>
  );
}
export async function getStaticPaths() {
  const { data } = await axios(`${API_URL}/projects`);
  const project = await data.data;

  const paths = project.map((item) => ({
    params: { slug: item.attributes.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log(slug);

  const { data } = await axios(
    `${API_URL}/projects?slug=${slug}&populate=image`
  );
  const project = await data.data;

  return {
    props: { project: project },
  };
}
