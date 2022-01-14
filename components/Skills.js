import { skills } from '../utils/constants';
export default function Skills() {
  return (
    <section>
      <h3 className='text-2xl font-semibold '>Skills</h3>
      <div className='mt-5 mb-12 w-full flex flex-wrap md:justify-between '>
        {skills.map((skill, inx) => (
          <ul
            key={inx}
            className='mt-5 mb-5 mr-2 flex flex-col  items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-500 transition-all'
          >
            <li className='text-3xl m-3 md:text-5xl'>{skill.icon}</li>
            <h4>{skill.text}</h4>
          </ul>
        ))}
      </div>
    </section>
  );
}
