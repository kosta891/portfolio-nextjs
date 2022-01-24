import axios from 'axios';

import Projects from '../../components/Projects';

import Layout from '../../components/UI/Layout';

import { API_URL } from '../../utils/urls';

export default function projects({ projects }) {
  return (
    <Layout
      title='Projects | Miloš Kostadinović'
      description='This is my projects i made so far. Each project was made with love and a lot attention to details.'
    >
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight  mb-12'>
        All Projects
      </h1>
      <Projects data={projects} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await axios(`${API_URL}/projects?&populate=image`);
  const projects = await data.data;

  return {
    props: { projects },
  };
}
