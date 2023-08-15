import { social } from '../utils/constants';

export default function Footer() {
  return (
    <footer className='mt-8 mb-16'>
      <hr className=' border-1 border-gray-200 dark:border-gray-600 mb-8' />
      <h3 className='text-gray-700 dark:text-gray-200'>Links</h3>
      {
        <ul className=' sm:flex sm:flex-row justify-start items-center  mt-6 mb-4'>
          {social.map((link) => (
            <li key={link.id} className='w-max flex items-center mr-4 mb-4'>
              <a
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-500 transition-all text-2xl sm:text-3xl mr-4'
              >
                {link.icon}
              </a>
              <p className='text-gray-600 dark:text-gray-400 '>{link.text}</p>
            </li>
          ))}
        </ul>
      }
    </footer>
  );
}
