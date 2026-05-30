"use client";
import Image from "next/image";
import { useState } from "react";

export default function OrderSummary() {
  const [items] = useState(() => {
    if (typeof window === "undefined") return [];

    try {
      const stored = localStorage.getItem("checkoutData");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  if (items.length === 0) return <p className="p-10 text-center text-on-surface-variant">Please add book to cart</p>;
  if (!items.length) return <p className="p-10 text-center text-on-surface-variant">Loading...</p>;


  const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold uppercase mb-6 text-on-surface">Order Summary</h2>

      <div className="space-y-6">
        {items.map((i) => {
          const { productId, title, image, price, quantity } = i;

          return (
            <div
              key={productId}
              className="glass-card p-6 rounded-3xl space-y-4 border border-white/60"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Image
                  alt="image"
                  src={image || "/fallback.png"}
                  height={500}
                  width={300}
                  className="w-full sm:w-20 h-56 sm:h-28 object-cover rounded-2xl border border-white/60"
                />

                <div className="flex-1">
                  <h3 className="font-bold">{title}</h3>

                  <p className="text-sm text-on-surface-variant">
                    Qty: {quantity}
                  </p>

                  <p className="text-primary font-bold mt-2">
                    ₹{price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="border-t border-border/40 pt-4 space-y-2">
          <div className="flex justify-between text-on-surface-variant">
            <span>Subtotal</span>
            <span className="text-on-surface">₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-on-surface-variant">
            <span>Shipping</span>
            <span className="text-primary">Free</span>
          </div>

          <div className="flex justify-between text-on-surface-variant">
            <span>Tax</span>
            <span className="text-on-surface">₹{tax.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mt-2 text-on-surface">
            <span>Total</span>
            <span className="text-primary">₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
