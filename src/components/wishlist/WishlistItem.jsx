"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import { deleteWishlist } from "@/features/wishlistSlice";
import { useState } from "react";

export default function WishlistItem({
  id,
  bookId,
  title,
  author,
  price,
  tag,
  image,
}) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.cart);

  const [toast, setToast] = useState("");

  const handleMoveToCart = () => {
    if (loading) return;

    dispatch(addToCart({ productId: bookId, quantity: 1 }));
    dispatch(deleteWishlist(id));

    setToast("Moved to cart 🛒");
  };

  const handleDelete = () => {
    dispatch(deleteWishlist(id));
    setToast("Removed from wishlist ❌");
  };

  return (
    <>
      <div className="group relative flex flex-col md:flex-row gap-5 sm:gap-6 p-4 rounded-3xl glass-card border border-white/60 hover:border-primary/20 transition shadow-2xl shadow-black/10">
        <div className="relative w-full md:w-40 aspect-2/3 overflow-hidden rounded-2xl shadow-xl shrink-0 border border-white/60">
          <Image
            alt="Image"
            src={image || "/placeholder.png"}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 py-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
            <div>
              <h3 className="text-xl md:text-2xl font-headline font-bold text-on-surface group-hover:text-primary">
                {title}
              </h3>
              <p className="text-sm text-on-surface-variant">{author}</p>
            </div>

            <button
              onClick={handleDelete}
              className="text-error hover:text-red-600 cursor-pointer transition text-xl"
            >
              ✕
            </button>
          </div>

          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-primary text-xl font-bold">
                ₹{price?.toFixed(2)}
              </p>
              <p className="text-xs uppercase text-on-surface-variant">
                {tag || "Wishlist Item"}
              </p>
            </div>

            <button
              onClick={handleMoveToCart}
              disabled={loading}
              className="btn btn-primary w-full sm:w-auto px-6 py-3 font-bold flex items-center gap-2 hover:scale-[1.03] active:scale-95 transition cursor-pointer"
            >
              {loading ? "Moving..." : "🛒 Move to Cart"}
            </button>
          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 glass-card text-on-surface px-4 py-2 rounded-xl shadow-lg z-50">
          {toast}
        </div>
      )}
    </>
  );
}
