export type BlogPost = {
  slug: string;
  title: string;
  date?: string; // created at / published date
  description?: string;
  content: string;
  category?: string;
  readTime?: string;
  live?: boolean;
};

import meta from './blogMeta';

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/\.md$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function parseFrontmatter(raw: string) {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  const fm: Record<string, any> = {};
  let content = raw;
  if (fmMatch) {
    const body = fmMatch[1];
    body.split(/\n+/).forEach((line) => {
      const idx = line.indexOf(':');
      if (idx > -1) {
        const key = line.slice(0, idx).trim();
        let val = line.slice(idx + 1).trim().replace(/^"|"$/g, '');
        // coerce booleans
        if (/^(true|false)$/i.test(val)) {
          fm[key] = val.toLowerCase() === 'true';
        } else {
          fm[key] = val;
        }
      }
    });
    content = raw.slice(fmMatch[0].length).trim();
  }
  return { fm, content };
}


let _postsCache: BlogPost[] | null = null;

async function loadPosts(): Promise<BlogPost[]> {
  if (_postsCache) return _postsCache;

  const slugs = Object.keys(meta);
  const results: BlogPost[] = [];
  for (const slug of slugs) {
    try {
      const url = `/raw-blogs/${slug}.md`;
      const res = await fetch(url);
      const raw = await res.text();
      const { fm, content } = parseFrontmatter(raw);
      const merged = { ...(meta[slug] || {}), ...fm } as Record<string, any>;
      results.push({
        slug,
        title: merged.title ?? slug,
        date: merged.date,
        description: merged.description,
        content,
        category: merged.category,
        readTime: merged.readTime,
        live: typeof merged.live === 'boolean' ? merged.live : merged.live === 'true',
      } as BlogPost);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Failed to load blog for slug:', slug, e);
    }
  }

  results.sort((a, b) => {
    const da = a.date ?? '';
    const db = b.date ?? '';
    return db.localeCompare(da);
  });

  _postsCache = results;
  return results;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return await loadPosts();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const all = await loadPosts();
  return all.find((p) => p.slug === slug);
}
