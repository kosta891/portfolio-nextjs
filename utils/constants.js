import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
export const navLinks = [
  { id: 1, text: 'home', url: '/' },
  { id: 2, text: 'about', url: '/about' },
  { id: 3, text: 'projects', url: '/projects' },
  { id: 4, text: 'blog', url: '/blog' },
  { id: 5, text: 'contact', url: '/contact' },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/milos.kostadinovic.961',
    icon: <FaFacebook className=' ' />,
    text: 'facebook',
  },
  {
    id: 2,
    url: 'https://www.instagram.com/kosta891/?hl=sr',
    icon: <FaInstagram className=' ' />,
    text: 'instagram',
  },
  {
    id: 3,
    url: 'https://github.com/kosta891',
    icon: <FaGithub className=' ' />,
    text: 'gitHub',
  },
];
