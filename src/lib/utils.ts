import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import BLOG_IMAGE_FILENAMES from './blogImages';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Return an Unsplash Source URL for a given query and size.
 * Uses the Unsplash Source endpoint so no API key is required.
 */
export function getUnsplashImage(query: string, width = 1200, height = 675, seed?: string) {
  const q = encodeURIComponent(query || 'nature');
  // `sig` helps vary the image per post so images don't all cache to the same photo
  const sig = seed ? `&sig=${encodeURIComponent(seed)}` : '';
  return `https://source.unsplash.com/${width}x${height}/?${q}${sig}`;
}

// Load local blog images (as URLs) from the public folder root.
const _blogImageModules = import.meta.glob('/blog-images/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
let _blogImageUrls = Object.values(_blogImageModules);

// Fallback: if the glob didn't return anything (public assets may not be importable),
// construct URLs from known filenames in the `public/blog-images` folder.
if (!_blogImageUrls || _blogImageUrls.length === 0) {
  _blogImageUrls = BLOG_IMAGE_FILENAMES.map((n) => `/blog-images/${n}`);
}

/**
 * Pick a local blog image by numeric index. Images are assigned in order.
 */
export function getBlogImage(index?: number, fallback?: string) {
  if (_blogImageUrls.length === 0) return fallback ?? '';
  if (typeof index !== 'number' || isNaN(index)) return _blogImageUrls[0];
  const idx = Math.abs(Math.floor(index)) % _blogImageUrls.length;
  return _blogImageUrls[idx];
}
