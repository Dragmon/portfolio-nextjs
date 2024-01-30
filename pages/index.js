import useScrollIntoView from '../hooks/useScrollIntoView';
import MyData from '../components/MyData';
import { getItems, getProjects } from '../services/itemService';
import Projects from '../components/Projects';

export default function Home({ items, projects }) {
  useScrollIntoView();

  return (
    <>
      <MyData />
      <Projects projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  const res = await getItems();
  const resProjects = await getProjects();

  return {
    props: {
      items: res,
      projects: resProjects,
    },
  };
}
