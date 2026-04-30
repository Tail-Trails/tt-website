import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

// Load local blog images (as URLs) from the assets folder.
const _blogImageModules = import.meta.glob('../assets/blog-images/*', { eager: true, as: 'url' }) as Record<string, string>;
const _blogImageUrls = Object.values(_blogImageModules);

/**
 * Pick a local blog image by numeric index. Images are assigned in order.
 */
export function getBlogImage(index?: number, fallback?: string) {
  if (_blogImageUrls.length === 0) return fallback ?? '';
  if (typeof index !== 'number' || isNaN(index)) return _blogImageUrls[0];
  const idx = Math.abs(Math.floor(index)) % _blogImageUrls.length;
  return _blogImageUrls[idx];
}
