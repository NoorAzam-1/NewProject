"use client";
import Link from "next/link";
import { site } from "@/data/site";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot_password" ||
    pathname === "/reset_password"
  )
    return null;

  return (
    <footer className="mt-12 py-12 w-full border-t border-outline-variant/20 bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="font-headline text-lg font-extrabold text-on-surface">
            {site.brand}
          </div>
          <p className="text-on-surface-variant text-sm max-w-sm">
            BrainHub — AI-powered learning for modern teams and creators. Build
            skills faster with personalized learning paths and smart
            assessments.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-on-surface-variant hover:text-on-surface transition"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-on-surface transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-on-surface transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-on-surface font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-on-surface-variant text-sm">
            <li>
              <Link href="/browse">Courses</Link>
            </li>
            <li>
              <Link href="/library">Library</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-on-surface font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-on-surface-variant text-sm">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/feedback">Feedback</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-on-surface font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-on-surface-variant text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/privacy_policy">Privacy</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-outline-variant/10 pt-6">
        <div className="mx-auto max-w-7xl px-6 text-sm text-on-surface-variant flex items-center justify-between">
          <div>
            © {new Date().getFullYear()} {site.brand}
          </div>
          <div className="text-on-surface-variant">Made with ❤️ — BrainHub</div>
        </div>
      </div>
    </footer>
  );
}
