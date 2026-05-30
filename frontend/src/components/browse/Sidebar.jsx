"use client";

import { Search, IndianRupee, X } from "lucide-react";

export default function Sidebar({
  open,
  setOpen,
  search,
  setSearch,
  selectedGenre,
  setSelectedGenre,
  maxPrice,
  setMaxPrice,
  selectedFormat,
  setSelectedFormat,
}) {
  const genres = [
    "Classic Literature",
    "Philosophical",
    "Modern Art",
    "Poetry",
    "History",
    "Self-Help",
    "Fiction",
    "Non-Fiction",
  ];

  const formats = ["EPUB", "PDF", "EPUB/PDF"];

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <aside
        className={`w-[min(84vw,20rem)] sm:w-80 md:w-72 lg:w-80 p-4 sm:p-5 space-y-6 glass-card z-40
        fixed top-0 left-0 h-full overflow-y-auto transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:sticky md:top-0 md:h-fit`}>
        <button onClick={() => setOpen(false)} className="md:hidden text-primary">
          <X />
        </button>

        <div className="relative">
          <Search className="absolute top-1/2 ml-1 -translate-y-1/2 text-on-surface-variant" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, author..."
            className="input pl-10 py-3 text-sm"
          />
        </div>

        <section>
          <h3 className="text-[10px] sm:text-xs md:text-[11px] font-headline text-primary tracking-[0.1rem] uppercase mb-3">
            Format
          </h3>
          <div className="flex flex-wrap gap-2">
            {formats.map((f) => (
              <button
                key={f}
                onClick={() =>
                  setSelectedFormat(selectedFormat === f ? "" : f)
                }
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs transition ${
                  selectedFormat === f
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-surface-light text-on-surface-variant hover:bg-primary hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-[10px] sm:text-xs md:text-[11px] font-headline text-primary tracking-[0.1rem] uppercase mb-3">
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGenre(selectedGenre === g ? "" : g)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs transition ${
                  selectedGenre === g
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-surface-light text-on-surface-variant hover:bg-primary hover:text-white"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between text-[10px] sm:text-xs mb-3 text-on-surface-variant">
            <h3 className="text-secondary uppercase tracking-[0.1rem]">
              Price Range
            </h3>
            <span className="flex items-center">
              <IndianRupee size={10} />
              0 — <IndianRupee size={10} />
              {maxPrice}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="5000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-primary"
          />
        </section>
      </aside>
    </>
  );
}