import Image from "next/image";
import OrderStackImage from "./OrderStackImage";

export default function OrderCard({ type, status }) {
  return (
    <div className="rounded-3xl border border-white/60 glass-card p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 shadow-2xl shadow-black/10">

      <div className="w-full md:w-auto flex justify-center md:justify-start">
        {type === "stack" ? (
          <div className="w-[140px] h-[180px] sm:w-[160px] sm:h-[200px]">
            <OrderStackImage />
          </div>
        ) : (
          <div className="relative w-[240px] h-[180px] sm:w-[160px] sm:h-[200px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFmDyVyYFPjLXgA-sHrWCHsxO1mgNJo9Jl3kBhPVfyKZ4GssyRbplTSXCO0EZjq2MRcNgUe6I971P7YORuys3mDvg_agk4BGTo_kp50_fWjNrMGBFZyI0Lz00FkUO0tZjm1fuaNW8tAnIbP6lGrVRo1NNZlvaIJHabz9hh_sDjQ3xfx5-NDhHRzuVpqiui_Av0GshFf3Q3H5Gz4tlwmYk8f9Betl-UiRobL8zb56rxEEsggxfx6pdFicjA7z4v-0PJOmotyNg2kis"
              alt="book"
              fill
              className="object-cover rounded"
            />
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">

          <div>
            <h3 className="text-lg sm:text-xl font-bold">#ORD-7742</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              Oct 24, 2026
            </p>
          </div>

          <div
            className={`text-[10px] sm:text-xs px-3 py-1 rounded-full border w-fit ${
              status === "completed"
                ? "text-secondary border-secondary/40 bg-secondary/10"
                : "text-on-surface-variant border-border/70 bg-white/5"
            }`}
          >
            {status}
          </div>
        </div>

        <p className="font-semibold text-sm sm:text-base mb-2">
          The Gilded Architect
        </p>

        <p className="text-secondary font-bold text-base sm:text-lg mb-5">
          ₹124.50
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="w-full sm:w-auto btn btn-primary px-5 py-2.5 text-sm active:scale-95 transition">
            Download
          </button>

          <button className="w-full sm:w-auto btn btn-ghost px-5 py-2.5 text-sm">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
}