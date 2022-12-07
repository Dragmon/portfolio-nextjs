import { getProjects } from '../services/itemService';

export async function getPathsProjects() {
  const items = await getProjects();

  const projects = items.map((item) => {
    return {
      params: {
        name_project: item.url_name_project,
      },
    };
  });

  return projects;
}

export async function getProjectData(name_project) {
  const items = await getProjects();

  return items.find((item) => item.url_name_project === name_project);
}

export const arrayText = (text) => {
  const arrayText = text.split('/');
  const arrayTextFilter = arrayText.filter((item) => item !== '');
  return arrayTextFilter;
};
