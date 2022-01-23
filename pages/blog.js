import Image from 'next/image';
import { useContext } from 'react/cjs/react.development';
import Layout from '../components/UI/Layout';
import PortfolioContext from '../context/context';

export default function blog() {
  return (
    <Layout
      title='Blog | Miloš Kostadinović'
      description='Web Development blog page where I write articles about frontend technologies, new features of programming languages and much more. '
    >
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-2'>
        Comming soon...
      </h1>
      <div className='mt-8 md:mt-16'>
        <Image
          src={'/images/under-construction.png'}
          width={500}
          height={500}
        />
      </div>
    </Layout>
  );
}
