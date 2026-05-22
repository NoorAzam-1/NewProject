"use client";
import Image from "next/image";
import { ArrowRight, BookOpen, BrainCircuit, Sparkles, Users } from "lucide-react";
import { site } from "@/data/site";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const heroStats = [
    { label: "Guided tracks", value: "120+", icon: BookOpen },
    { label: "Active learners", value: "18k", icon: Users },
    { label: "AI insights", value: "Live", icon: BrainCircuit },
  ];

  const [heroTitleLineOne, ...heroTitleRest] = site.hero.title.split(" ");
  const heroTitleLineTwo = heroTitleRest.join(" ");

  const handleBuyNow = () => {
    localStorage.setItem(
      "checkoutData",
      JSON.stringify([
        {
          productId: "hero-book",
          title: site.hero.title,
          price: site.hero.price,
          image: site.hero.image,
          quantity: 1,
        },
      ]),
    );
    router.push("/checkout");
  };
  return (
    <section className="mx-auto w-full">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-futuristic px-6 py-8 shadow-2xl shadow-black/20 md:px-10 lg:px-16 lg:py-14">
          <div className="absolute -left-12 top-8 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_34%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-5 md:space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {site.hero.badge}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary/90">
                  BrainHub learning studio
                </p>

                <h1 className="font-headline max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-on-surface md:text-6xl lg:text-7xl">
                  {site.hero.title}
                </h1>
              </div>

              <p className="max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl">
                {site.hero.description}
              </p>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <button
                    className="btn btn-primary w-full gap-2 px-8 py-4 shadow-lg shadow-primary/20 sm:w-auto"
                  onClick={handleBuyNow}
                >
                  Buy Now — ₹{site.hero.price.toFixed(0)}
                  <ArrowRight className="h-5 w-5" />
                </button>

                <button className="btn btn-ghost w-full gap-2 px-8 py-4 sm:w-auto">
                  Explore Learning Paths
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/15 bg-white/6 p-4 backdrop-blur-md"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-lg font-bold text-on-surface">
                            {stat.value}
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:justify-self-end">
              <div className="absolute inset-8 rounded-[2rem] bg-primary/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/92 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                      Live learning
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-on-surface">
                      Daily focus board
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    Smart mode
                  </span>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-1">
                  <div className="flex flex-col gap-3">
                    <div className="rounded-[1.4rem] border border-border/40 bg-surface-light p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary">
                        Progress
                      </p>
                      <div className="mt-3 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-3xl font-bold text-on-surface">84%</p>
                          <p className="text-xs text-on-surface-variant">
                            AI-assisted track complete
                          </p>
                        </div>
                        <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                          Weekly pace: +12%
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.4rem] border border-border/40 bg-surface-light p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary">
                        Suggested next step
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-on-surface">
                            Start your first learning path
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            Curated lessons, practice, and progress tracking.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.4rem] border border-border/40 bg-surface-light p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary">
                          Daily rhythm
                        </p>
                        <span className="text-xs font-semibold text-primary">
                          Focused
                        </span>
                      </div>

                      <div className="mt-3 space-y-2">
                        {[
                          "Morning lesson",
                          "Project practice",
                          "AI review",
                        ].map((item, index) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-2xl bg-white/80 px-3 py-2"
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                                {index + 1}
                              </span>
                              <span className="text-sm font-medium text-on-surface">
                                {item}
                              </span>
                            </div>
                            <span className="text-xs text-on-surface-variant">
                              20 min
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
