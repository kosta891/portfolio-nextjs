import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import { SiNextdotjs, SiReact, SiGatsby, SiMongodb } from 'react-icons/si';

import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { DiGit, DiJavascript1 } from 'react-icons/di';

export const navLinks = [
  { id: 1, text: 'home', url: '/' },
  { id: 2, text: 'about', url: '/about' },
  { id: 3, text: 'projects', url: '/projects' },
  { id: 4, text: 'blog', url: '/blog' },
  { id: 5, text: 'contact', url: '/contact' },
];

export const social = [
  // {
  //   id: 1,
  //   url: 'https://www.facebook.com/milos.kostadinovic.961',
  //   icon: <FaFacebook />,
  //   text: 'facebook',
  // },
  // {
  //   id: 2,
  //   url: 'https://www.instagram.com/kosta891/?hl=sr',
  //   icon: <FaInstagram />,
  //   text: 'instagram',
  // },

  {
    id: 3,
    url: 'https://github.com/kosta891',
    icon: <FaGithub />,
    text: 'gitHub',
  },
  {
    id: 4,
    url: 'mailto:milos@miloskostadinovic.com',
    icon: <MdOutlineAlternateEmail />,
    text: 'email',
  },
];

export const skills = [
  { id: 1, text: 'NEXTJS', icon: <SiNextdotjs /> },
  { id: 2, text: 'ReactJs', icon: <SiReact /> },

  { id: 4, text: 'JavaScript', icon: <DiJavascript1 /> },

  { id: 5, text: 'HTML', icon: <FaHtml5 /> },

  { id: 6, text: 'Css', icon: <FaCss3Alt /> },

  { id: 7, text: 'Gatsby', icon: <SiGatsby /> },
  { id: 8, text: 'MongoDB', icon: <SiMongodb /> },
  { id: 3, text: 'Git', icon: <DiGit /> },
];
