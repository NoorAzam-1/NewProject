import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers3,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { site } from "@/data/site";

export const metadata = {
  title: `About ${site.brand}`,
  description:
    "Learn how BrainHub helps learners and teams build skills with guided paths, smart practice, and AI-powered progress.",
};

const stats = [
  { label: "Learning paths", value: "120+", icon: BookOpenCheck },
  { label: "Active learners", value: "18k", icon: Users },
  { label: "Skill categories", value: "30+", icon: Layers3 },
  { label: "AI insights", value: "Live", icon: BrainCircuit },
];

const principles = [
  {
    title: "Personal by design",
    description:
      "BrainHub adapts around each learner with focused recommendations, clear milestones, and progress that feels visible.",
    icon: Target,
  },
  {
    title: "Practice over passive reading",
    description:
      "Every path is shaped around doing the work: short lessons, useful projects, and review loops that make skill growth stick.",
    icon: GraduationCap,
  },
  {
    title: "Clarity for teams",
    description:
      "Managers and creators get a clean view of momentum, strengths, and the next best step without noisy dashboards.",
    icon: Compass,
  },
];

const timeline = [
  "Curated tracks turn broad goals into small, achievable learning steps.",
  "Smart assessments surface gaps before they become blockers.",
  "Progress boards help learners return every day with a clear focus.",
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden text-on-surface">
      <section className="relative rounded-[2rem] border border-border/60 bg-gradient-futuristic px-5 py-10 shadow-2xl shadow-black/10 sm:px-8 md:py-14 lg:px-14">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-primary/15 blur-[110px]" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              About {site.brand}
            </div>

            <div className="space-y-4">
              <h1 className="max-w-3xl font-headline text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                We help people learn with momentum.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl">
                {site.brand} is a modern learning workspace built for curious
                students, creators, and teams who want guided paths, practical
                projects, and intelligent feedback in one focused place.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/browse"
                className="btn btn-primary gap-2 rounded-2xl px-6 py-3"
              >
                Explore paths
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/feedback"
                className="btn btn-ghost rounded-2xl px-6 py-3"
              >
                Share feedback
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] border border-white/60 p-4 sm:p-6">
            <div className="rounded-[1.5rem] border border-border/50 bg-surface-light p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                    Learning engine
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">Skill growth map</h2>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  Active
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {timeline.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-white/70 bg-white/75 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="glass-card rounded-3xl border border-white/60 p-5"
            >
              <Icon className="h-6 w-6 text-primary" />
              <p className="mt-4 text-3xl font-extrabold">{stat.value}</p>
              <p className="text-sm text-on-surface-variant">{stat.label}</p>
            </div>
          );
        })}
      </section>

      <section className="grid gap-6 py-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">
            What drives us
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Learning should feel structured, useful, and alive.
          </h2>
          <p className="text-on-surface-variant">
            We are building BrainHub around a simple belief: people do their
            best learning when the next step is obvious, the practice is
            meaningful, and progress feels close enough to keep going.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="glass-card rounded-3xl border border-white/60 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-8">
        <div className="glass-card overflow-hidden rounded-[2rem] border border-white/60">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">
                Built for real progress
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                From first lesson to confident execution.
              </h2>
              <p className="mt-4 text-on-surface-variant">
                BrainHub combines course discovery, guided practice, feedback,
                and a personal library so learners can move from intention to
                action without hopping across tools.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Curated learning paths for AI, design, and business.",
                  "Progress checkpoints that keep every learner oriented.",
                  "A clean workspace for saved resources and purchased content.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-on-surface-variant">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-futuristic p-6 sm:p-8 lg:p-10">
              <div className="grid h-full gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/60 bg-white/75 p-5">
                  <BrainCircuit className="h-7 w-7 text-primary" />
                  <p className="mt-8 text-4xl font-extrabold">AI</p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Recommendations shaped by goals, pace, and practice.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/75 p-5 sm:mt-10">
                  <Users className="h-7 w-7 text-secondary" />
                  <p className="mt-8 text-4xl font-extrabold">Team</p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Shared learning momentum for teams and creators.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/60 bg-white/75 p-5 sm:col-span-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                    Our promise
                  </p>
                  <p className="mt-3 text-2xl font-bold">
                    Less noise. More direction. Better learning days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
