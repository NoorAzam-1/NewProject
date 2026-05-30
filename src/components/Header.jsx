"use client";
import Link from "next/link";
import {
  User,
  Heart,
  UserRoundCog,
  LogOut,
  X,
  ShoppingCart,
  Menu,
  Home,
  Library,
  ShoppingBag,
  Search,
  Info,
} from "lucide-react";

import { site } from "@/data/site";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAsync, getProfile } from "@/features/authSlice";
import { getCart } from "@/features/cartSlice";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useSelector((state) => state.auth);
  const { cartCount } = useSelector((state) => state.cart);
  const { wishlist = [] } = useSelector((state) => state.wishlist);
  const isLoggedIn = !!user;

  useEffect(() => {
    if (!user) {
      dispatch(getProfile());
      dispatch(getCart());
    }
  }, [dispatch, user]);

  const logout = () => {
    dispatch(logoutUserAsync());
    router.push("/login");
  };
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Books", href: "/browse", icon: Search },
    { name: "Library", href: "/library", icon: Library },
    { name: "About", href: "/about", icon: Info },
  ];

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot_password" ||
    pathname === "/reset_password"
  )
    return null;

  return (
    <>
      <header className="sticky top-0 z-50 mb-4 md:mb-6 w-full border-b border-border/70 bg-white/85 backdrop-blur-xl transition-shadow shadow-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-2 md:px-6 py-4">
          <div className="flex items-center gap-1 md:gap-4">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden btn-ghost p-2 flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-futuristic flex items-center justify-center shadow-sm shadow-primary/10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="9" fill="rgba(139,92,246,0.9)" />
                </svg>
              </div>
              <span className="font-headline text-lg font-extrabold uppercase tracking-tight text-on-surface">
                {site.brand}
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-2 transition ${
                  isActiveLink(link.href)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-on-surface hover:bg-slate-100 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 relative">
            {isLoggedIn ? (
              <div
                className="relative"
                onMouseEnter={() => setProfileOpen(true)}
                onMouseLeave={() => setProfileOpen(false)}
              >
                <UserRoundCog
                  className="h-6 w-6 text-primary cursor-pointer"
                  onClick={() => setProfileOpen((prev) => !prev)}
                />

                {profileOpen && (
                  <div className="absolute -right-6 md:-right-10 lg:-right-12 xl:-right-20 top-6 w-52 glass-card rounded-3xl shadow-2xl z-50 backdrop-blur-2xl border border-white/70">
                    <div className="py-2 text-sm">
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-2 hover:bg-slate-100 transition"
                      >
                        <User size={16} />
                        My Profile
                      </Link>

                      <Link
                        href="/orders"
                        className="flex items-center gap-3 px-4 py-2 hover:bg-slate-100 transition"
                      >
                        <ShoppingBag size={16} />
                        Orders
                      </Link>

                      <Link
                        href="/wishlist"
                        className="flex items-center justify-between px-4 py-2 hover:bg-slate-100 transition"
                      >
                        <div className="flex items-center gap-3">
                          <Heart size={16} />
                          Wishlist
                        </div>

                        {wishlist.length > 0 && (
                          <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-bold">
                            {wishlist.length}
                          </span>
                        )}
                      </Link>
                    </div>

                    <div className="border-t border-border/40 mt-2 pt-2">
                      <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-2 w-full text-red-500 hover:bg-red-500/10 transition"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2 md:gap-3">
                <Link
                  href="/login"
                  className="text-sm font-semibold hover:text-primary"
                >
                  Login
                </Link>
                <Link href="/register" className="btn btn-primary px-4 py-2 rounded-2xl">
                  Get Started
                </Link>
              </div>
            )}

            {isLoggedIn && (
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-on-surface" />

                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            )}
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 h-full w-64 glass-card shadow-2xl border-r border-border/50 transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-border/40">
          <span className="text-secondary font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X className="hover:text-red-600 cursor-pointer" />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl transition ${
                  isActiveLink(link.href)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "hover:bg-slate-100"
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-slate-900/30 z-40"
        />
      )}
    </>
  );
}
