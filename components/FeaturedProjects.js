import Image from 'next/image';
import { projectsData } from '../utils/projectsData';

export default function FeaturedProjects() {
  return (
    <div>
      {projectsData.map((project) => (
        <div
          key={project.name}
          className='flex flex-col sm:flex sm:flex-row sm:justify-between rounded mt-3'
        >
          <div className=''>
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={400}
              height={200}
              className='rounded w-auto '
              objectFit='cover'
              objectPosition='center center'
            />
          </div>
          <div className='rounded'>
            <h3 className='text-gray-700 dark:text-gray-200 font-medium '>
              {project.name}
            </h3>
            <p className='text-gray-600 dark:text-gray-400'>
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
