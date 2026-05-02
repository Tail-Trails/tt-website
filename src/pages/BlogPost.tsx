import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import { getPostBySlug, getAllPosts, type BlogPost } from '../lib/blogs';
import { marked } from 'marked';
import { getBlogImage } from '../lib/utils';
import { Calendar, Clock, Tag } from 'lucide-react';
import './blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const [post, setPost] = useState<BlogPost | undefined>();
  const [index, setIndex] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!slug) return;
    let active = true;
    const load = async () => {
      const p = await getPostBySlug(slug);
      if (!active) return;
      setPost(p);
      if (p) {
        const posts = await getAllPosts();
        const idx = posts.findIndex((x) => x.slug === p.slug);
        setIndex(idx >= 0 ? idx : undefined);
      }
    };
    void load();
    return () => {
      active = false;
    };
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 p-6">
          <div className="container mx-auto">
            <div className="glass rounded-2xl p-8 text-center">Post not found.</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isPreview = ['1', 'true', 'yes'].includes((searchParams.get('preview') || '').toLowerCase());

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <section className="container mx-auto px-6">
          <div className="glass rounded-2xl overflow-hidden border border-border/50">
            <div className="w-full">
              {index !== undefined && (
                <img
                  src={getBlogImage(index)}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">{(post as any).category || 'General'}</span>
                  <div className="text-sm text-muted-foreground">{post.date} {isPreview ? '(Preview)' : ''}</div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{post.title}</h1>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{(post as any).readTime || ''}</span>
                </div>

                <article className="prose max-w-none text-foreground post-content" dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
