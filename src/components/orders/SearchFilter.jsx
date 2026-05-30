export default function SearchFilter() {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-10">
      
      <div className="flex-1 min-w-[280px] relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
          🔍
        </span>

          <input
            placeholder="Search orders or books..."
            className="w-full input pl-10 py-3 rounded-2xl"
        />
      </div>

      <div className="flex">
          <button className="px-5 py-2 rounded-full glass-card text-sm border border-white/60">
          Last 3 Months
        </button>
      </div>

    </div>
  );
}