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

// Import all markdown files from the assets raw-blogs folder as raw strings
const modules = import.meta.glob('../assets/raw-blogs/*.md', { eager: true, as: 'raw' }) as Record<string, string>;

const posts = Object.entries(modules).map(([path, raw]) => {
  const file = path.split('/').pop()!;
  const slug = slugify(file);
  const { fm, content } = parseFrontmatter(raw);
  return {
    slug,
    title: fm.title ?? file.replace(/\.md$/, ''),
    date: fm.date,
    description: fm.description,
    content,
    category: fm.category,
    readTime: fm.readTime,
    live: typeof fm.live === 'boolean' ? fm.live : fm.live === 'true',
  } as BlogPost;
}).sort((a, b) => {
  const da = a.date ?? '';
  const db = b.date ?? '';
  return db.localeCompare(da);
});

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
