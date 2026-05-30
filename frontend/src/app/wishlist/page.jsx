import WishlistList from "@/components/wishlist/WishlistList";

export default function WishlistPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto bg-background text-on-surface px-4 sm:px-6 lg:px-0">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8 sm:mb-10">
        <div>
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold block mb-2">
            Curated Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold">
            My Wishlist
          </h2>
        </div>
      </div>

      {/* List */}
      <WishlistList />
    </main>
  );
}
