import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <SectionWrapper>
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-3xl font-heading font-bold mb-4">Article not found</h1>
          <Link to="/blog" className="text-primary font-semibold inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </SectionWrapper>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="bg-primary py-20 md:py-24">
        <div className="container max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft size={16} /> All articles
          </Link>
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-secondary mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-[16/8] rounded-2xl bg-gradient-to-br from-primary/10 via-accent to-secondary/10 flex items-center justify-center text-8xl mb-12">
            {post.heroEmoji}
          </div>

          <article className="space-y-8">
            {post.content.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    {block.heading}
                  </h2>
                )}
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </article>

          <div className="mt-16 p-8 rounded-2xl bg-accent text-center">
            <h3 className="text-2xl font-heading font-bold mb-3">Ready to source from India?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Share your requirements and we'll connect you with verified Indian exporters within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground hover:opacity-90 transition-opacity"
            >
              Source now
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="max-w-5xl mx-auto mt-20">
            <h3 className="text-2xl font-heading font-bold mb-8">Continue reading</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-5 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br from-primary/10 via-accent to-secondary/10 flex items-center justify-center text-3xl">
                    {p.heroEmoji}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                      {p.category}
                    </span>
                    <h4 className="font-heading font-bold mt-1 group-hover:text-primary transition-colors leading-snug">
                      {p.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
