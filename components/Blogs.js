import Link from 'next/link';

export default function Blogs({ data }) {
  console.log(data);
  return (
    <section className='mt-16 md:mt-20'>
      {data.map((blog) => {
        const { name, summary, slug, publishedAt } = blog.attributes;

        const date = new Date(publishedAt).toLocaleDateString('en', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
        });

        return (
          <div key={blog.id}>
            <Link href={`/blog/${slug}`}>
              <a className='opacity-95 hover:opacity-100 transition-all'>
                <div>
                  <div className='flex-column md:flex md:justify-between'>
                    <h3 className='text-gray-700 dark:text-gray-200 font-medium '>
                      {name}
                    </h3>
                    <p>{date}</p>
                  </div>

                  <p className='text-gray-600 dark:text-gray-400 md:mb-8 mb-4'>
                    {summary}
                  </p>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
