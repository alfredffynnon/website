import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const essays = (await getCollection('writing', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Alfred Williamson — Writing',
    description: 'Essays on game theory, geopolitics, and the politics of technology.',
    site: context.site,
    items: essays.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.date,
      link: `/writing/${e.id}/`
    }))
  });
}
