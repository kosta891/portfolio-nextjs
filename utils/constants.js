import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiGatsby,
  SiMongodb,
} from 'react-icons/si';

import { FaReact, FaHtml5, FaCss3Alt, FaCss3, FaGit } from 'react-icons/fa';
import { DiGit, DiJavascript1 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { GrGatsbyjs } from 'react-icons/gr';
import { RiGatsbyLine } from 'react-icons/ri';

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
    icon: <FaFacebook />,
    text: 'facebook',
  },
  {
    id: 2,
    url: 'https://www.instagram.com/kosta891/?hl=sr',
    icon: <FaInstagram />,
    text: 'instagram',
  },

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
  <SiReact />,
  <FaReact />,
  <DiGit />,
  <FaGit />,
  <DiJavascript1 />,
  <IoLogoJavascript />,
  <SiJavascript />,
  <FaHtml5 />,
  <SiHtml5 />,
  <FaCss3Alt />,
  <FaCss3 />,
  <GrGatsbyjs />,
  <RiGatsbyLine />,
  <SiGatsby />,
  <SiMongodb />,
];
