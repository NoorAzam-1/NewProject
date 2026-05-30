import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mb-4 md:mb-10">
      <div className="relative overflow-hidden rounded-3xl glass-card p-6 md:p-16 border border-white/60 shadow-2xl shadow-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.1),transparent_28%)]" />
        <div className="relative z-10 max-w-2xl">
          <span className="text-secondary text-sm md:text-md font-bold tracking-[0.3rem] uppercase mb-4 block">
            Frictionless Access
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Zero Wait. <br />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Instant Delivery.</span>
          </h2>

          <p className="text-on-surface-variant text-base sm:text-lg mb-8 max-w-xl">
            At BrainHub, shipping isn&apos;t measured in days—it&apos;s
            measured in milliseconds. Your next literary journey begins the
            moment you click &apos;Purchase&apos;.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary w-full sm:w-auto flex items-center gap-2 px-5 py-3">
              ⚡ Instant Download
            </button>

            <button className="btn btn-ghost w-full sm:w-auto flex items-center gap-2 px-5 py-3">
              ☁️ Cloud Sync
            </button>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-linear-to-l from-primary/30 to-transparent"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATBY9w6foLRUNRgEnQObA1xEkmi3sA_lf-aDvRMOx_wKJ5tBdaIKPPZawOPMUQYZzAWSEMKViedMgGJs-_sQ0in-V8wFb1RWQQiFXWdvOvKCM835K4xBHClb-N2114D3vG1iW5jjg4elNwcvpa2tIj1b3RNM20fiJ-MUtLXoeoolOzoS-vy4yvMQN2a-JK_f9Ip4PO4RpBGQcUfK153S9DSRS5s24DcJsl9cYzOClqb_aWqBOgcO7gJHXRxUIVxYSl6WBLLQWeBU0"
            alt="Book"
            height={400}
            width={600}
            className="w-full h-full object-cover opacity-80 mix-blend-overlay"
          />
        </div>
      </div>
    </section>
  );
}
