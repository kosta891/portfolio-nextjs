import { skills } from '../utils/constants';
export default function Skills() {
  return (
    <section>
      <h3 className='text-2xl font-semibold '>Skills</h3>
      <div>
        <ul>
          {skills.map((skill) => (
            <li>{skill.icon}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
