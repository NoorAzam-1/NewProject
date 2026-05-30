import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "How BrainHub Personalizes Learning Paths",
    excerpt:
      "See how we blend reading signals, progress tracking, and guided practice to create truly adaptive learning journeys.",
    category: "Product",
    readTime: "6 min",
    image: "/images/reading/gr2.webp",
  },
  {
    title: "Designing Better Study Routines for Busy Teams",
    excerpt:
      "A practical framework to build consistent learning habits using short focus cycles and measurable milestones.",
    category: "Learning",
    readTime: "8 min",
    image: "/images/reading/gr4.webp",
  },
  {
    title: "From Library to Lab: Turning Notes Into Action",
    excerpt:
      "Convert highlights into experiments, projects, and outcomes with BrainHub's weekly review model.",
    category: "Workflow",
    readTime: "5 min",
    image: "/images/reading/gr1.webp",
  },
  {
    title: "What Modern Readers Expect in 2026",
    excerpt:
      "Fast access, sync everywhere, and meaningful recommendations are now baseline expectations for digital learners.",
    category: "Insights",
    readTime: "7 min",
    image: "/images/books/book4.webp",
  },
  {
    title: "Building a Knowledge Stack That Actually Works",
    excerpt:
      "How to structure your library so every read contributes to long-term skill growth and team output.",
    category: "Strategy",
    readTime: "9 min",
    image: "/images/books/book2.webp",
  },
  {
    title: "Why Feedback Loops Matter in Learning Products",
    excerpt:
      "The role of user feedback in improving content quality, recommendation relevance, and learner confidence.",
    category: "Community",
    readTime: "4 min",
    image: "/images/books/book6.webp",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface py-8 md:py-12">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <header className="mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary font-bold">
            BrainHub Journal
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-headline font-extrabold">
            Stories, Product Notes, and Learning Ideas
          </h1>
          <p className="mt-4 text-on-surface-variant max-w-3xl">
            Explore practical reads from the BrainHub team on learning design,
            product updates, and better reading systems.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group glass-card rounded-3xl border border-white/60 overflow-hidden shadow-xl shadow-black/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 md:p-6 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-on-surface-variant">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href="/browse"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition"
                >
                  Read article
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
