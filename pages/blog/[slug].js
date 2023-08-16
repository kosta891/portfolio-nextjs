import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import Layout from '../../components/UI/Layout';
import NotFoundPage from '../404';

export default function Blog({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return <NotFoundPage />;
  }

  const { name, description, summary } = blogs.fields;

  const date = new Date(blogs.sys.createdAt).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <Layout title={`${name} | Miloš Kostadinović`} description={summary}>
      <section>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-12 '>
          {name}
        </h1>
        <p>{date}</p>
        <div className='mt-2 md:mt-6 mb-6 md:mb-8'>
          {documentToReactComponents(description)}
        </div>
      </section>

      <Link href='/blog'>
        <a className='mt-8'>
          <BsArrowLeft className='inline text-2xl mr-1' />
          Back to Blogs
        </a>
      </Link>
    </Layout>
  );
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const { items } = await client.getEntries({ content_type: 'blog' });
  const paths = items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': slug,
  });

  return {
    props: { blogs: items[0] || null },
    revalidate: 180,
  };
}
