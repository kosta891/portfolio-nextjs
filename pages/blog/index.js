import { createClient } from 'contentful';
import Blogs from '../../components/Blogs';
import Layout from '../../components/UI/Layout';

export default function blog({ blogs }) {
  return (
    <Layout
      title='Blog | Miloš Kostadinović'
      description='Web Development blog page where I write articles about frontend technologies, new features of programming languages and much more. '
    >
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-2'>
        Blog
      </h1>

      <Blogs data={blogs} />
    </Layout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const { items } = await client.getEntries({ content_type: 'blog' });

  return {
    props: { blogs: items },
    revalidate: 180,
  };
}
