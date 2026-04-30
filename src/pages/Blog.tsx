import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { blogPosts } from "@/data/blogPosts";
import heroBg from "@/assets/hero-port-wide.png";

export default function Blog() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground max-w-3xl">
            Insights from the Sourcing Floor
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl leading-relaxed">
            Practical guides on importing from India, written by people who do it every day.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-accent to-secondary/10 flex items-center justify-center text-7xl">
                {post.heroEmoji}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block self-start text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
                  {post.category}
                </span>
                <h2 className="text-xl font-heading font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
