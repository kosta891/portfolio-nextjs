import Layout from '../components/UI/Layout';
import axios from 'axios';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/contact', {
        name,
        email,
        message,
      });

      if (!response) {
        toast.error('No response from api');

        throw new Error(response.data.message || 'Something went wrong');
      }
      setName('');
      setEmail('');
      setMessage('');
      toast.success('Message sent');
    } catch (error) {
      console.log(error);
      toast.error(
        error.message === 'Request failed with status code 422'
          ? 'Please fill all fields'
          : 'Something went wrong'
      );
      return;
    }
  };

  return (
    <Layout
      title='Contact | Miloš Kostadinović'
      description='Contact Page of Miloš Kostadinović website. Feel free to send a message.'
    >
      <form className='rounded-lg flex flex-col ' onSubmit={submitHandler}>
        <h1 className='text-2xl font-bold text-gray-700 dark:text-gray-200'>
          Send a message
        </h1>
        <ToastContainer autoClose={2000} />
        <label
          htmlFor='name'
          className='text-gray-600 mt-8 dark:text-gray-400 '
        >
          Name<span className='text-red-500 ml-1'>*</span>
        </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
