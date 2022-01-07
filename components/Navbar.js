import Link from 'next/link';
import { useContext, useEffect } from 'react';
import PortfolioContext from '../context/context';
import { navLinks } from '../utils/constants';
import { navClose, navOpen } from './UI/Svg';
import ThemeSwitch from './UI/ThemeSwitch';

export default function Navbar() {
  const { isNavOpen, setIsNavOpen } = useContext(PortfolioContext);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isNavOpen]);

  return (
    <header className='flex flex-col justify-center transition-all '>
      <nav className='flex items-center justify-between w-full relative border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900  dark:text-gray-100 '>
        <div className='flex flex-row items-center w-4/5'>
          <ul>
            {navLinks.map((link) => (
              <Link href={link.url} key={link.id}>
                <a className='mx-3 hidden md:visible md:inline-block rounded  hover:bg-gray-200 dark:hover:bg-gray-600 px-3 sm:py-2 transition-all'>
                  {link.text}
                </a>
              </Link>
            ))}
          </ul>

          {isNavOpen && (
            <ul className=' min-w-full top:0 flex flex-col absolute bg-white dark:bg-theme-black  mobile-menu mobile-menu-rendered'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className='border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold '
                >
                  <Link href={link.url}>
                    <a
                      onClick={() => setIsNavOpen(false)}
                      className='flex w-auto pt-4 pb-4 transition-all'
                    >
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <button
            className='visible md:hidden mb-4 transition-all z-50 '
            aria-label='Toggle menu'
            type='button'
            onClick={() => {
              setIsNavOpen((prState) => !prState);
            }}
          >
            {isNavOpen ? navOpen() : navClose()}
          </button>
        </div>

        <ThemeSwitch className='md-hidden' />
      </nav>
    </header>
  );
}
