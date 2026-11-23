import { getCollection } from 'astro:content';

export async function getProjects() {
  return (await getCollection('work')).sort((first, second) => first.data.order - second.data.order);
}
