import axios from 'axios';
import Image from 'next/image';
import Blogs from '../../components/Blogs';

import Layout from '../../components/UI/Layout';
import { API_URL } from '../../utils/urls';

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

export async function getStaticProps({ ctx }) {
  const { data } = await axios.get(`${API_URL}/blogs?&populate=image`);
  const blogs = await data.data;

  return {
    props: { blogs },
  };
}
