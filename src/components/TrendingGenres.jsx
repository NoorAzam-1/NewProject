import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import Link from "next/link";

export default function TrendingGenres() {
  const getCardTheme = (index) => {
    const themes = [
      {
        cardBg: "bg-[#0b285c]/90 border-[1.5px] border-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.3)]",
        imageOpacity: "opacity-60 mix-blend-screen",
        overlay: "from-[#071738] via-[#071738]/70 to-transparent",
        badge: "bg-blue-500/40 border border-blue-400/50 text-white",
        title: "text-white",
        tag: "bg-blue-900/60 border border-blue-400/40 text-blue-100",
        spotlight: "bg-white/10 border border-white/20",
        spotlightText: "text-white",
        spotlightSub: "text-blue-200",
        dot: "bg-blue-400",
      },
      {
        cardBg: "bg-[#101036]/90 border-[1.5px] border-indigo-400/80 shadow-[0_0_35px_rgba(99,102,241,0.2)]",
        imageOpacity: "opacity-50 mix-blend-screen",
        overlay: "from-[#080820] via-[#080820]/70 to-transparent",
        badge: "bg-indigo-500/40 border border-indigo-400/50 text-white",
        title: "text-white",
        tag: "bg-indigo-900/60 border border-indigo-400/40 text-indigo-100",
        spotlight: "bg-white/5 border border-white/10",
        spotlightText: "text-white",
        spotlightSub: "text-indigo-200",
        dot: "bg-indigo-400",
      },
      {
        cardBg: "bg-gradient-to-br from-[#7ee8fa] via-[#80ffea] to-[#00c9ff] border-[1.5px] border-white/80 shadow-[0_0_50px_rgba(0,201,255,0.4)]",
        imageOpacity: "opacity-30 mix-blend-overlay",
        overlay: "hidden", 
        badge: "bg-black/10 border border-black/20 text-slate-800",
        title: "text-slate-900",
        tag: "bg-white/50 border border-white/80 text-slate-800 shadow-sm",
        spotlight: "bg-white/40 border border-white/60 shadow-md",
        spotlightText: "text-slate-900",
        spotlightSub: "text-slate-700",
        dot: "bg-slate-800",
      }
    ];
    return themes[index % 3];
  };

  const getCorrectImage = (title, originalImage) => {
    const name = title.toLowerCase();
    if (name.includes("ai") || name.includes("artificial")) {
      return "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"; 
    }
    if (name.includes("design")) {
      return "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"; 
    }
    if (name.includes("business")) {
      return "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1000&auto=format&fit=crop";
    }
    return originalImage;
  };

  return (
    <section className="mx-auto w-full my-12">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-futuristic py-12 px-4 shadow-2xl shadow-black/5 md:px-8 lg:py-14">
        
        <div 
          className="absolute inset-0 opacity-50 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0,0,0,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />

        <div className="absolute -left-12 top-8 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_34%)]" />

        <div className="relative z-10 mx-auto md:mb-10 flex flex-col gap-4 px-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
              Trending Genres
            </h2>
            <p className="mt-2 text-base md:text-lg font-medium text-on-surface-variant">
              Hand-picked categories for your next discovery.
            </p>
          </div>

          <Link 
            href="/browse" 
            className="btn btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:scale-105 bg-white/50 backdrop-blur-md"
          >
            View All <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="relative z-10 mx-auto grid grid-cols-1 gap-6 md:px-2 py-4 lg:grid-cols-3">
          {site.genres.map((genre, index) => {
            const theme = getCardTheme(index);
            const imagePath = getCorrectImage(genre.name, genre.image);
            
            return (
              <div
                key={genre.name}
                className={`group relative w-full overflow-hidden rounded-[2rem] transition-all duration-500 hover:-translate-y-3 ${theme.cardBg}`}
              >
                <Image
                  src={imagePath}
                  alt={genre.name}
                  fill
                  unoptimized
                  className={`object-cover transition-all duration-1000 group-hover:scale-110 ${theme.imageOpacity}`}
                />
                
                <div className={`absolute inset-0 bg-linear-to-t ${theme.overlay} opacity-95`} />

                <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-between p-4 sm:p-8">
                  
                  <div className="flex items-start justify-between">
                    <span className={`rounded-full px-2 md:px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md ${theme.badge}`}>
                      {genre.count}
                    </span>
                    <Link 
                      href="/browse" 
                      className="translate-x-4 rounded-full bg-black/20 p-2.5 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 hover:bg-black/40"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className={`mb-4 font-headline text-4xl sm:text-5xl font-black tracking-tighter drop-shadow-sm ${theme.title}`}>
                        {genre.name}
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {genre.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-lg px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-sm ${theme.tag}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`group/spot rounded-2xl p-4 backdrop-blur-xl transition-all duration-300 ${theme.spotlight}`}>
                      <p className={`mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${theme.spotlightText}`}>
                        <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${theme.dot}`} />
                        Bestseller Spotlight
                      </p>

                      <div className="flex items-center gap-4">
                        <Image
                          src={genre?.spotlight?.image}
                          alt={genre.spotlight.title}
                          width={48}
                          height={64}
                          unoptimized
                          className="h-16 w-12 rounded-lg object-cover shadow-xl transition-transform duration-300 group-hover/spot:scale-110"
                        />
                        <div className="flex-1 overflow-hidden">
                          <p className={`truncate text-sm font-bold tracking-wide ${theme.spotlightText}`}>
                            {genre.spotlight.title}
                          </p>
                          <p className={`text-xs mt-0.5 ${theme.spotlightSub}`}>
                            {genre.spotlight.author}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}