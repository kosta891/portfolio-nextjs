import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import Layout from '../components/UI/Layout';

export default function NotFoundPage() {
  return (
    <Layout
      title={'Page Not Found'}
      description='This page cannot be found or does not exist.'
    >
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-2'>
        Page not found! : (
      </h1>
      <div className='mt-8 '>
        <div className='w-full md:w-96 items-center'>
          <img src='/images/404.png' alt='not found' />
        </div>
        <Link href='/'>
          <a className='mt-8'>
            <BsArrowLeft className='inline text-2xl mr-1' />
            Back to Home
          </a>
        </Link>
      </div>
    </Layout>
  );
}
