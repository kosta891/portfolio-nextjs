import Image from 'next/image';
import { useContext, useEffect } from 'react/cjs/react.development';
import Layout from '../components/UI/Layout';
import PortfolioContext from '../context/context';

export default function about() {
  return (
    <Layout>
      <section>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-52 lg:h-24'>
            <Image
              src={'/images/avatar.jpg'}
              width={300}
              height={400}
              objectPosition={'center'}
              objectFit='cover'
              className='rounded-3xl'
            />
          </div>
          <div>
            As a developer I pay close attention to my code’s readability. Sure,
            I’ll put together something as quickly as possible to make it work,
            but after that I’ll spend a good amount of time commenting and
            organizing everything. Mi casa es tu casa, I want you to feel
            welcome around my code. Clean, consistent, readable and maintainable
            code. It’s great when features work, but it’s even greater whenever
            they can stay that way, regardless of who’s working on them. I’m
            excited to work on new projects, because I learn something new every
            time. I’m excited for the next challenge!
          </div>
        </div>
      </section>
    </Layout>
  );
}
