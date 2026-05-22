import Image from "next/image";
import Link from "next/link";

export default function CollectionsSection() {
  return (
    <section>
      {/* Heading */}
      <div className="text-center mb-5 md:mb-10">
        <span className="text-primary text-xs tracking-[0.3em] uppercase">
          Spotlight
        </span>
        <h2 className="text-4xl md:text-5xl font-headline font-bold mt-3">
          Seasonal Curations
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Card 1 */}
        <div className="relative aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/5] rounded-2xl overflow-hidden group ">
          {/* Image */}
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmjzg1QpDELZMNVhlOVCAFgJFdrWYmdZ0gGLdLjgRLEAUrlpDtAJCfZzizTHHeNq0TU8LacPIIaVVEdnqeyEZpHWZ81TNmDGMpE-Vc4Q_H1JrqEKRO1wgD0X7AcYu0DiCdOcq5FXzqokVc27274Qdo4Y26tcOaUDI01ejuvUCANdDW6Vx8btmS_CF56MPvyQFehAtOk_CSfjh8i4ZfK0tJHxdYIutF0RSK8hXKGiHTVxo1dCpDojheUoOivwtQCriXbLwBXWE0cpk"
            alt="Winter Collection"
            fill
            className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-70"
          />

          <div className="absolute inset-0 rounded-2xl border-8 border-transparent group-hover:border-primary transition-all duration-500 pointer-events-none"></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-surface/90 via-surface/40 to-transparent flex flex-col justify-center items-center text-center px-5 sm:px-6 transition">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              The Winter Solstice Collection
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-on-surface-variant mb-5 sm:mb-6 max-w-sm">
              Atmospheric reads for the longest nights of the year.
            </p>

            <Link href="/browse" className="border border-primary text-primary px-6 py-2 text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition">
              Browse Collection
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/5] rounded-2xl overflow-hidden group">
          {/* Image */}
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1YuZY-85MbNNTrDJH3sJFCjxMgWk9t9XyEF2fe4fWsoa2-aO3fQ-fgKK-i63irfSAD0iGq0t28otwkc8kwcAsYMdyvucv7KRyd7aXiucISRBHRpX-JuCiKVSN30z0xcURjJub1xJ9yoEh-YIYaHyIq4uF60vYZ3fsejhD3CW9yc2FgDGsMtJ7SAydCVH-WGzE-ws7LUjFUwAozxmdcQq6KF02MRnrymMiIJF93_vjol9_-9GgqFLN8UQIB-3phZhK4shib-Iv3N8"
            alt="Winter Collection"
            fill
            className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-70"
          />

          <div className="absolute inset-0 rounded-2xl border-8 border-transparent group-hover:border-primary transition-all duration-500 pointer-events-none"></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-surface/90 via-surface/40 to-transparent flex flex-col justify-center items-center text-center px-5 sm:px-6 transition">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              The Winter Solstice Collection
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-on-surface-variant mb-5 sm:mb-6 max-w-sm">
              Atmospheric reads for the longest nights of the year.
            </p>

            <Link href="/browse" className="border border-primary text-primary px-6 py-2 text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition">
              Browse Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
