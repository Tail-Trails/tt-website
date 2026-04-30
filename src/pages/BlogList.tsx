import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { getAllPosts, type BlogPost } from '../lib/blogs';
import { getBlogImage } from '../lib/utils';
import './blog-list.css';

const categoryColors: Record<string, string> = {
  Strategy: 'bg-yellow-500/20 text-yellow-400',
  Insights: 'bg-purple-500/20 text-purple-400',
  Trends: 'bg-blue-500/20 text-blue-400',
  Growth: 'bg-green-500/20 text-green-400',
  Tutorial: 'bg-orange-500/20 text-orange-400',
};

const BlogList = () => {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const previewValue = (searchParams.get('preview') || '').toLowerCase();
  const isPreview = previewValue === '1' || previewValue === 'true' || previewValue === 'yes';

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    try {
      const all = getAllPosts();
      if (!active) return;
      // If frontmatter contains `live` flag, respect it; otherwise show all
      const filtered = isPreview ? all : (all as any).filter ? (all as any).filter((p: any) => p.live !== false) : all;
      setPosts(filtered as BlogPost[]);
    } catch (err: any) {
      setError(err?.message || 'Failed to load posts.');
    } finally {
      if (active) setLoading(false);
    }

    return () => {
      active = false;
    };
  }, [isPreview]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(posts.map((p) => (p as any).category || 'General'))).filter(Boolean)];

  const displayed = selectedCategory === 'All' ? posts : posts.filter((p) => ((p as any).category || 'General') === selectedCategory);
  const featuredDisplayed = displayed.length ? displayed[0] : undefined;
  const latest = displayed.length > 1 ? displayed.slice(1) : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <section className="container mx-auto px-6 mb-12">
          {!loading && !featuredDisplayed && (
            <div className="glass rounded-2xl border border-border/50 p-8 text-center text-muted-foreground">
              {error || 'No articles available yet.'}
            </div>
          )}

          {featuredDisplayed && (
            <Link to={`/blog/${featuredDisplayed.slug}${isPreview ? '?preview=true' : ''}`} className="group block">
              <div className="glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-colors">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={getBlogImage(0)}
                      alt={featuredDisplayed.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      {/** category may be undefined in current setup */}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[(featuredDisplayed as any).category] || 'bg-secondary text-secondary-foreground'}`}>
                        {(featuredDisplayed as any).category || 'General'}
                      </span>
                      <span className="text-sm text-muted-foreground">Featured</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredDisplayed.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{featuredDisplayed.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredDisplayed.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {/* readTime not available; omit if missing */}
                        {(featuredDisplayed as any).readTime || ''}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </section>

        <section className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <label className="sr-only">Filter by category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="ml-2 bg-bg-secondary border border-border-subtle text-sm text-muted-foreground rounded-md px-3 py-1"
              >
                {categories.map((c) => (
                  <option key={c} value={c} className="bg-bg-secondary text-text-primary">
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading && <div className="col-span-full text-center text-muted-foreground">Loading articles...</div>}

            {!loading && latest.length === 0 && !!featuredDisplayed && (
              <div className="col-span-full text-center text-muted-foreground">No additional articles yet.</div>
            )}

            {latest.map((p, i) => (
              <Link key={p.slug} to={`/blog/${p.slug}${isPreview ? '?preview=true' : ''}`} className="group block">
                <article className="glass rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={getBlogImage(i + 1)}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[(p as any).category] || 'bg-secondary text-secondary-foreground'}`}>
                        {(p as any).category || 'General'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {p.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {(p as any).readTime || ''}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;
