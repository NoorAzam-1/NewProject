"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import { addWishlist, deleteWishlist } from "@/features/wishlistSlice";
import { useState, useMemo } from "react";
import { Star, StarHalf } from "lucide-react";
import Link from "next/link";

export default function BookCard({ book }) {
  const { wishlist = [] } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  const [loadingId, setLoadingId] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [toast, setToast] = useState("");

  const {
    _id,
    title,
    author,
    price,
    images,
    format,
    bestseller,
    averageRating,
  } = book;

  const displayRating = useMemo(() => {
    if (averageRating && averageRating > 0) return averageRating;

    const hash = _id
      ?.split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    return ((hash % 15) / 10 + 3.5).toFixed(1);
  }, [_id, averageRating]);

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(full)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}

        {hasHalf && (
          <StarHalf className="w-4 h-4 fill-accent text-accent" />
        )}

        {[...Array(empty)].map((_, i) => (
          <Star key={`e-${i}`} className="w-4 h-4 text-on-surface-variant/40" />
        ))}
      </div>
    );
  };

  const coverImage = images?.[0]?.url || "/placeholder-book.png";

  const isInWishlist = wishlist.some(
    (item) => item?.bookId?._id?.toString() === _id?.toString(),
  );

  const handleCart = async (e) => {
    e.stopPropagation();
    if (loadingId === _id) return;
    setLoadingId(_id);
    try {
      dispatch(addToCart({ productId: _id, quantity: 1 }));
      setToast("Added to cart 🛒");
    } finally {
      setLoadingId(null);
      setTimeout(() => setToast(""), 700);
    }
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
    if (isInWishlist) {
      const item = wishlist.find(
        (w) => w?.bookId?._id?.toString() === _id?.toString(),
      );

      if (item?._id) {
        dispatch(deleteWishlist(item._id));
        setToast("Removed from wishlist");
      }
    } else {
      dispatch(addWishlist({ bookId: _id }));
      setToast("Added to wishlist 💖");
    }

    setTimeout(() => setToast(""), 2000);
  };


  return (
    <article className="group relative flex h-full flex-col pb-4 sm:pb-6">
      <Link
        href={`/browse/books/${_id}`}
        className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface shadow-2xl shadow-black/10 transition duration-300 group-hover:-translate-y-2 border border-white/60"
      >
        <Image
          src={coverImage}
          alt={title}
          width={300}
          height={400}
          className="w-full h-full object-cover"
        />

        {bestseller && (
          <span className="absolute top-3 left-3 bg-primary text-white text-[10px] px-3 py-1 rounded-full shadow-lg shadow-primary/20">
            Bestseller
          </span>
        )}

        <span className="absolute top-3 right-3 bg-white/80 text-on-surface text-[10px] px-2 py-1 rounded-full backdrop-blur-md border border-border/40">
          {format}
        </span>
      </Link>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-on-surface transition group-hover:text-primary">{title}</h3>
        <p className="text-sm text-on-surface-variant">{author}</p>

        <div className="flex gap-3 mt-2 items-center">
          <p className="font-bold text-secondary">₹{price}</p>

          <div className="flex items-center gap-1 text-sm">
            {renderStars(displayRating)}
            <span className="text-on-surface-variant">({displayRating})</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 sm:gap-3">
        <button
          onClick={handleCart}
          disabled={loadingId === _id}
          className="btn btn-primary flex-1 py-2 text-[12px] sm:text-sm cursor-pointer"
        >
          {loadingId === _id ? "Adding..." : "Add to Cart"}
        </button>

        <button
          onClick={handleWishlist}
          className={`w-10 h-10 text-xl rounded-full glass-card cursor-pointer transition-transform ${
            animate ? "scale-125" : ""
          } ${isInWishlist ? "text-pink-400" : "text-on-surface-variant"}`}
        >
          {isInWishlist ? "❤️" : "🤍"}
        </button>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 glass-card text-on-surface px-4 py-2 rounded-xl border border-white/60">
          {toast}
        </div>
      )}
    </article>
  );
}
