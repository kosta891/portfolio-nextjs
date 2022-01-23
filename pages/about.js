import Image from 'next/image';

import Layout from '../components/UI/Layout';

export default function about() {
  return (
    <Layout
      title='About | Miloš Kostadinović'
      description="I'm a Frontend Developer. Currently developing apps and websites
    on React and NextJs. Becoming a better developer is my main goal."
    >
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
              blurDataURL='/images/avatar.jpg'
              placeholder='blur'
            />
          </div>
          <div className='w-full md:w-1/2 '>
            <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-8 '>
              About me
            </h1>

            <div className='mt-4 md:mt-6'>
              <p className='mt-2 md:mt-6'>
                I'm a Frontend Developer. Currently developing apps and websites
                on React and NextJs. In my free time reading developers blogs
                and articles. New to Gatsby and Tailwind Css.
              </p>
              <p className='mt-2 md:mt-6'>
                Becoming a better developer and growing a career in tech are my
                main goals. Let’s Make the Web.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
