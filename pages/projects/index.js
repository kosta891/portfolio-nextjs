import Projects from '../../components/Projects';
import Layout from '../../components/UI/Layout';
import { createClient } from 'contentful';

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
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: 'projects' });

  return {
    props: { projects: res.items },
    revalidate: 180,
  };
}
