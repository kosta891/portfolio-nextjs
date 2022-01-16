import { useContext, useEffect } from 'react/cjs/react.development';
import Layout from '../components/UI/Layout';
import PortfolioContext from '../context/context';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function contact() {
  return (
    <Layout>
      {/* shadow-lg */}
      <form className='rounded-lg flex flex-col '>
        <h1 className='text-2xl font-bold text-gray-700 dark:text-gray-200'>
          Send a message
        </h1>

        <label
          htmlFor='fullname'
          className='text-gray-600 mt-8 dark:text-gray-400 '
        >
          Full name<span className='text-red-500 ml-1'>*</span>
        </label>
        <input
          type='text'
          name='fullname'
          className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1  text-gray-600 dark:text-gray-400'
        />

        <label
          htmlFor='email'
          className='text-gray-600 dark:text-gray-400 mt-4'
        >
          E-mail<span className='text-red-500 ml-1'>*</span>
        </label>
        <input
          type='email'
          name='email'
          className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 text-gray-600 dark:text-gray-400'
        />

        <label
          htmlFor='message'
          className='text-gray-600 dark:text-gray-400 mt-4'
        >
          Message<span className='text-red-500 ml-1'>*</span>
        </label>
        <textarea
          name='message'
          className='bg-transparent border-b py-2 pl-4 h-20 focus:outline-none focus:rounded-md focus:ring-1 resize-none  text-gray-600 dark:text-gray-400'
        ></textarea>
        <div className='flex flex-row items-center justify-start'>
          <button className='px-3 md:py-2 mt-6 py-1 transition-all rounded-md  flex flex-row items-center text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700'>
            Send
            <AiOutlineArrowRight className='ml-2' />
          </button>
        </div>
      </form>
    </Layout>
  );
}
