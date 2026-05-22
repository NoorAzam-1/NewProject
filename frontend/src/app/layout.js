import Header from "@/components/Header";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import { Providers } from "./provider";
import AuthGuard from "@/components/AuthGuard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "BrainHub",
  description: "BrainHub - AI-powered learning platform and modern EdTech SaaS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark bg-background">
      <body
        className={`${inter.variable} ${manrope.variable} bg-background text-on-surface antialiased`}
      >
        <Providers>
          <AuthGuard>
            <Header />
            <main className="relative z-10 mx-auto mt-6 mb-16 w-full max-w-7xl px-4 sm:mt-8 sm:px-6 lg:mt-10 lg:px-10">
              <div className="space-y-8 md:space-y-12">
                {children}
              </div>
            </main>
            <Footer />
          </AuthGuard>
        </Providers>
      </body>
    </html>
  );
}
