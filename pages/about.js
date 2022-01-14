import Image from 'next/image';
import { FaFileDownload } from 'react-icons/fa';
import { useContext, useEffect } from 'react/cjs/react.development';
import Layout from '../components/UI/Layout';
import PortfolioContext from '../context/context';

export default function about() {
  return (
    <Layout>
      <section>
        <div className='flex flex-col md:flex-row'>
          <div className='w-40 md:w-1/2'>
            <Image
              src={'/images/avatar.jpg'}
              width={300}
              height={350}
              objectPosition={'center'}
              objectFit='cover'
              className='rounded-2xl'
            />
          </div>
          <div className='w-full md:w-1/2 '>
            <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-8 '>
              About me
            </h1>

            {/*  */}
            <div className='flex items-center'>
              <h3 className='text-2xl'>Resume</h3>
              <button
                //href='/images/projects/msauto.jpg' //ne valja ovako mora api
                target='_blank'
                rel='noreferrer nofollow'
                className='ml-4 text-2xl'
                onClick={() =>
                  window.open('/images/projects/msauto.jpg', '_blank')
                }
              >
                <FaFileDownload />
              </button>
            </div>
            {/*  */}

            <div className='mt-4 md:mt-6'>
              <p className='mt-2 md:mt-6'>
                I'm a Frontend Developer. Currently developing apps and websites
                on React and NextJs. In my free time reading developers blogs
                and articles. New to Gatsby and Tailwindcss.
              </p>
              <p className='mt-2 md:mt-6'>
                Welcome to my website, where I share what I'm learning about and
                building apps. Becoming a better developer and growing a career
                in tech are my main goals. Let’s Make the Web faster.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
