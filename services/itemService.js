export async function getItems() {
  //const request = await fetch(`${process.env.URL_API}/api/technologies`);
  const request = await fetch(`${process.env.URL_API}/technologies`);
  const items = await request.json();

  return items;
}

export async function getProjects() {
  //const request = await fetch(`${process.env.URL_API}/api/projects`);
  const request = await fetch(`${process.env.URL_API}/projects`);
  const projects = await request.json();

  return projects;
}
