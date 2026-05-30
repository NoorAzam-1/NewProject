"use client";

import { useState, useEffect } from "react";
import { User, History, CreditCard, ChevronRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "@/features/authSlice";
import AddBook from "./AddBook";

export default function ProfilePage() {
  const [active, setActive] = useState("profile");
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const role = user?.role === "seller" || user?.role === "admin";
  useEffect(() => {
    dispatch(getProfile()).unwrap();
  }, [dispatch]);

  if (loading) {
    return (
      <p className="h-screen flex justify-center items-center text-center mt-10 text-on-surface-variant">
        Loading profile...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <main className="max-w-5xl mx-auto space-y-4 md:space-y-7 px-4 sm:px-6 lg:px-0">
        <section className="flex flex-col items-center text-center rounded-3xl glass-card p-8 md:p-10">
          <div className="w-20 h-20 rounded-full bg-gradient-futuristic border border-white/80 mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
            {user?.name || "No Name"}
          </h2>
          <p className="text-on-surface-variant text-sm mt-2">AI learning dashboard and personal workspace</p>
        </section>

        <section className="glass-card p-5 rounded-3xl border border-white/60">
          <h3 className="text-xs uppercase tracking-widest text-on-surface-variant mb-4">
            Library Insights
          </h3>

          <div className="grid grid-cols-3 text-center gap-2">
            <Stat number="124" label="E-Books Read" />
            <Stat number="842" label="Reading Hours" />
            <Stat number="12" label="Day Streak" />
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-xs uppercase tracking-widest text-on-surface-variant px-1">
            Account Management
          </h3>

          <div className="glass-card rounded-3xl border border-white/60 overflow-hidden">
            <MenuItem
              icon={<User size={18} />}
              label="Personal Information"
              value="personal"
              active={active}
              onClick={() => setActive("personal")}
            />

            <MenuItem
              icon={<History size={18} />}
              label="Order History"
              value="orders"
              active={active}
              onClick={() => setActive("orders")}
            />

            <MenuItem
              icon={<CreditCard size={18} />}
              label="Payment Methods"
              value="payment"
              active={active}
              onClick={() => setActive("payment")}
            />
          </div>
        </section>

        <section className="glass-card p-5 rounded-3xl border border-white/60">
          {active === "personal" && <PersonalInfo user={user} />}
          {active === "orders" && <OrderHistory />}
          {active === "payment" && <PaymentMethods />}

          {active === "profile" && (
            <p className="text-sm text-on-surface-variant text-center">
              Select an option to view details
            </p>
          )}
        </section>

        {role && (
          <div className="glass-card rounded-3xl border border-white/60 p-5">
            <AddBook />
          </div>
        )}
      </main>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="flex-1">
      <p className="text-2xl font-bold text-secondary">{number}</p>
      <p className="text-[10px] uppercase text-on-surface-variant">{label}</p>
    </div>
  );
}

function MenuItem({ icon, label, onClick, value, active }) {
  const isActive = active === value;

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-4 transition group border-b border-border/30 last:border-none
        ${isActive ? "bg-primary/10" : "hover:bg-slate-100"}
      `}
    >
      <div className="flex items-center gap-3">
        <span
            className={`transition ${
            isActive ? "text-primary scale-110" : "text-on-surface-variant"
          }`}
        >
          {icon}
        </span>

        <span
          className={`text-sm ${isActive ? "text-primary font-semibold" : ""}`}
        >
          {label}
        </span>
      </div>

      {isActive ? (
        <ChevronRight size={18} className="text-primary rotate-90" />
      ) : (
        <ChevronRight size={16} className="text-outline/50" />
      )}
    </button>
  );
}

function PersonalInfo({ user }) {
  return (
    <div className="space-y-3 text-sm">
      <h3 className="font-bold text-primary mb-3">Personal Information</h3>

      <InfoRow label="Name" value={user?.name || "N/A"} />
      <InfoRow label="Email" value={user?.email || "N/A"} />
      <InfoRow label="Contact" value={user?.contact || "N/A"} />
      <InfoRow label="Address" value={user?.address || "N/A"} />
    </div>
  );
}

function OrderHistory() {
  const orders = [
    { id: "#ORD123", book: "Atomic Habits (EPUB)", price: "₹299" },
    { id: "#ORD124", book: "Deep Work (PDF)", price: "₹399" },
  ];

  return (
    <div>
      <h3 className="font-bold text-primary mb-3">Order History</h3>

      <div className="space-y-3">
        {orders.map((o, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:justify-between gap-2 p-3 bg-surface-light rounded-2xl border border-border/30"
          >
            <div>
              <p className="text-sm font-medium">{o.book}</p>
              <p className="text-xs text-on-surface-variant">{o.id}</p>
            </div>

            <span className="text-primary font-semibold">{o.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentMethods() {
  const cards = [
    { type: "Visa", number: "**** 1234" },
    { type: "MasterCard", number: "**** 5678" },
  ];

  return (
    <div>
      <h3 className="font-bold text-primary mb-3">Payment Methods</h3>

      <div className="space-y-3">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:justify-between gap-2 p-3 bg-surface-light rounded-2xl border border-border/30"
          >
            <span>{card.type}</span>
            <span className="text-on-surface-variant">{card.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-border/30 pb-2">
      <span className="text-on-surface-variant">{label}</span>
      <span>{value}</span>
    </div>
  );
}
