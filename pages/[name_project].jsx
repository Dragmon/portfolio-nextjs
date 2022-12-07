import { useRouter } from 'next/router';
import { getPathsProjects, getProjectData } from '../lib/utils';
import DataProject from '../components/DataProject';
import style from '../styles/Name_project.module.css';
import { PAGE_TRANSITION } from '../lib/pageTransition';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import DataProjectSlider from '../components/DataProjectSlider';

const pageMotionProps = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: PAGE_TRANSITION.EXITDURATION,
      delay: PAGE_TRANSITION.EXITDURATION,
      ease: PAGE_TRANSITION.EASE,
    },
  },
};

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
    <LazyMotion features={domAnimation}>
      <m.section className={style.projectSection} {...pageMotionProps}>
        <h2 className={'titleProyect'}>{name_project}</h2>
        {project_images.length > 1 ? (
          <DataProjectSlider dataProject={dataProject} />
        ) : (
          <DataProject dataProject={dataProject} />
        )}
      </m.section>
    </LazyMotion>
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
