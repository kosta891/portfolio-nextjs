import Image from 'next/image';
import Link from 'next/link';

export default function Projects({ data }) {
  return (
    <section>
      {data.map((project, inx) => {
        const {
          name,
          description,
          slug,

          image: {
            fields: {
              file: { url },
            },
          },
        } = project.fields;

        return (
          <div
            key={project.sys.id}
            className={`flex flex-col ${
              (inx + 1) % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            } md:justify-between rounded mt-16 md:mt-20  `}
          >
            <Link href={`/projects/${slug}`}>
              <a className='opacity-95 hover:opacity-100 transition-all'>
                <Image
                  src={`https:${url}`}
                  alt={name}
                  width={500}
                  height={350}
                  className='rounded w-full md:w-1/2 '
                  objectFit='cover'
                  objectPosition='center center'
                  blurDataURL={`https:${url}`}
                  placeholder='blur'
                />
              </a>
            </Link>
            <div className='rounded w-full md:w-1/2 md:ml-4 md:mr-1'>
              <h3 className='text-gray-700 dark:text-gray-200 font-medium mb-4 mt-1'>
                {name}
              </h3>
              <p className='text-gray-600 dark:text-gray-400 md:mb-8 mb-4'>
                {description.length > 100
                  ? description.substring(0, 100) + '...'
                  : description}
              </p>
              <Link href={`/projects/${slug}`}>
                <a className='rounded  text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 px-3 md:py-2 py-1 transition-all'>
                  More details
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
