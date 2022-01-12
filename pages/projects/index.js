import Head from 'next/head';
import { useContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Projects from '../../components/Projects';

import Layout from '../../components/UI/Layout';
import PortfolioContext from '../../context/context';
import { projectsData } from '../../utils/projectsData';

export default function projects() {
  const [dataD, setDataD] = useState([]);

  useEffect(() => {
    const data = projectsData;
    setDataD(data);
  }, []);

  console.log(dataD);
  return (
    <Layout>
      <Head>
        <title>Projects | Miloš Kostadinović</title>
      </Head>
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight  mb-12'>
        All Projects
      </h1>
      <Projects data={dataD} />
    </Layout>
  );
}
