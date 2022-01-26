import axios from 'axios';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/UI/Layout';
import { API_URL } from '../../utils/urls';
import NotFoundPage from '../404';

export default function Blog({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return <NotFoundPage />;
  }

  const { name, description, summary, publishedAt } = blogs.attributes;

  const date = new Date(publishedAt).toLocaleDateString('en', {
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
          <ReactMarkdown className='reactMarkdown'>{description}</ReactMarkdown>
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

export async function getStaticPaths() {
  const { data } = await axios(`${API_URL}/blogs`);
  const blogs = await data.data;

  const paths = blogs.map((blog) => ({
    params: { slug: blog.attributes.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { data } = await axios(
    `${API_URL}/blogs?filters[slug][$eq]=${slug}&populate=image&`
  );

  const blogs = await data.data;

  console.log(blogs);
  return {
    props: { blogs: blogs[0] || null },
  };
}
