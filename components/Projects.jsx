import Card from './Card';
import style from '../styles/Projects.module.css';

export default function Projects({ projects }) {
  return (
    <section id="projectSection" className={style.projectSection}>
      <div className={style.titleSection}>
        <h2>Proyectos</h2>
      </div>
      <div className={style.contProjects}>
        {projects.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </div>
    </section>
  );
}
