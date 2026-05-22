"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
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
      <div className="relative flex min-h-[560px] flex-col items-center gap-12 overflow-hidden rounded-3xl border border-border/60 bg-gradient-futuristic p-6 lg:flex-row md:p-10 lg:p-16 shadow-2xl shadow-black/30">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-secondary/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%)]" />

        <div className="z-10 flex-1 space-y-3 md:space-y-6">
          <div className="inline-block rounded-full border border-primary/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {site.hero.badge}
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-on-surface">
            {site.hero.title.split(" ").slice(0, 2).join(" ")} <br />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              {site.hero.title.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-on-surface-variant md:text-xl">
            {site.hero.description}
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row md:items-center">
            <button
              className="btn btn-primary w-full md:w-auto gap-2 px-8 py-4 shadow-lg shadow-primary/20"
              onClick={handleBuyNow}
            >
              Buy Now — ₹{site.hero.price.toFixed(0)}
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="btn btn-ghost w-full md:w-auto gap-2 px-8 py-4">
              Explore Learning Paths
            </button>
          </div>
        </div>

        <div className="z-10 flex w-full  flex-1 justify-center md:w-auto">
          <div className="group relative lg:scale-135 xl:scale-140">
            <div className="absolute inset-0 rounded-full w-full  lg:w-[80%] bg-primary/20 blur-3xl transition-transform duration-700" />
            <Image
              src={site.hero.image}
              alt="Book Cover"
              width={320}
              height={600}
              priority
              className="h-auto w-64 -rotate-6 rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:rotate-0 md:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
