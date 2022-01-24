import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/UI/Layout';
import { API_URL } from '../../utils/urls';
import rehypeHighlight from 'rehype-highlight';

// import classes from '../../styles/react-markdown.module.css';
// import '../../styles/reactMarkdown.module.css';

export default function Blog({ blogs }) {
  console.log(blogs);
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
          <ReactMarkdown
            children={description}
            rehypePlugins={[rehypeHighlight]}
            className='reactMarkdown'
          />
        </div>
      </section>
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

  return {
    props: { blogs: blogs[0] || null },
  };
}
