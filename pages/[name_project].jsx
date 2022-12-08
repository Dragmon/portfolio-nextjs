import { useRouter } from 'next/router';
import { getPathsProjects, getProjectData } from '../lib/utils';
import DataProject from '../components/DataProject';
import style from '../styles/Name_project.module.css';
import DataProjectSlider from '../components/DataProjectSlider';

export default function Project({ projectInfo }) {
  const router = useRouter();
  const {
    name_project,
    project_images,
    description,
    link,
    technologies,
    repository,
  } = projectInfo;
  const dataProject = {
    project_images,
    description,
    link,
    repository,
    technologies,
  };

  return (
    <section className={style.projectSection}>
      <h2 className={'titleProyect'}>{name_project}</h2>
      {project_images.length > 1 ? (
        <DataProjectSlider dataProject={dataProject} />
      ) : (
        <DataProject dataProject={dataProject} />
      )}
    </section>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsProjects();

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const name_project = params.name_project;
  const project = await getProjectData(name_project);

  return {
    props: {
      projectInfo: project,
    },
  };
}
