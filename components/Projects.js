import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export default function Projects({ data }) {
  console.log(data);
  return (
    <section>
      {data.map((project) => (
        <div
          key={project.name}
          className='flex flex-col sm:flex sm:flex-row sm:justify-between rounded mt-8 mb-6'
        >
          {/* grayscale hover:grayscale-0 transition-all*/}
          <div className='opacity-95 hover:opacity-100 transition-all '>
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={500}
              height={350}
              className='rounded w-full sm:w-1/2 '
              objectFit='cover'
              objectPosition='center center'
              blurDataURL={project.imageUrl}
              placeholder='blur'
            />
          </div>
          <div className='rounded w-full sm:w-1/2 sm:ml-4'>
            <h3 className='text-gray-700 dark:text-gray-200 font-medium mb-4 mt-1'>
              {project.name}
            </h3>
            <p className='text-gray-600 dark:text-gray-400 sm:mb-8 mb-4'>
              {project.description}
            </p>
            <Link href={`/projects/${project.name}`}>
              <a className='rounded  text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 px-3 sm:py-2 py-1 transition-all'>
                More details
              </a>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
