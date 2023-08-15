import { createClient } from 'contentful';
import Image from 'next/image';
import Layout from '../../components/UI/Layout';
import NotFoundPage from '../404';

export default function singleProject({ project }) {
  if (!project) {
    return <NotFoundPage />;
  }

  const {
    name,
    description,
    github,
    livesite,
    image: {
      fields: {
        file: { url },
      },
    },
  } = project.fields;

  return (
    <Layout title={`${name} | Miloš Kostadinović`} description={description}>
      <section>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-12 '>
          {name}
        </h1>
        <p className='mt-2 md:mt-6 mb-6 md:mb-8'>{description}</p>

        <div>
          <Image
            src={`https:${url}`}
            alt={name}
            width={720}
            height={500}
            className='w-full h-full'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className='mt-6 md:mt-12'>
          {github && (
            <a
              href={github}
              className='mr-4 rounded text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 px-3 md:py-2 py-1 transition-all'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          )}
          {livesite && (
            <a
              href={livesite}
              className='mr-4 rounded text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 px-3 md:py-2 py-1 transition-all'
              target='_blank'
              rel='noreferrer'
            >
              Site
            </a>
          )}
        </div>
      </section>
    </Layout>
  );
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'projects' });
  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { items } = await client.getEntries({
    content_type: 'projects',
    'fields.slug': slug,
  });

  return {
    props: { project: items[0] || null },
    revalidate: 180,
  };
}
