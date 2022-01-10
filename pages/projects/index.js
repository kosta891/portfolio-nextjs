import { useContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

import Layout from '../../components/UI/Layout';
import PortfolioContext from '../../context/context';
import { projectsData } from '../../utils/projectsData';

export default function projects() {
  return (
    <Layout>
      <div>
        {projectsData.map((project) => (
          <div key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
