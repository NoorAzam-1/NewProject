"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const protectedRoutes = ["/profile", "/orders", "/cart", "/wishlist", "/checkout"];
    const authRoutes = ["/login", "/register"];

    if (protectedRoutes.some((r) => pathname.startsWith(r))) {
      if (!token) {
        router.replace("/login");
        return;
      }
    }

    if (pathname.startsWith("/admin")) {
      if (!token) {
        router.replace("/login");
        return;
      }

      if (role !== "admin") {
        router.replace("/profile");
        return;
      }
    }

    if (authRoutes.some((r) => pathname.startsWith(r))) {
      if (token) {
        if (role === "admin") {
          router.replace("/admin");
        } else {
          router.replace("/profile");
        }
        return;
      }
    }

    const timer = setTimeout(() => setLoading(false), 0);

    return () => clearTimeout(timer);
  }, [pathname, router]);

if (loading) {
  return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
}
  return children;
}
